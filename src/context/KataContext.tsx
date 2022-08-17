import { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import { kataService } from '../services';

export type TestError = {
	name: string | undefined;
	actual: string;
	expected: string;
};

export type TestData = {
	title: string;
	parentTitle: string | undefined;
	timedOut: boolean;
	testTime: number | undefined;
	failed: boolean;
	err?: TestError;
};

export type ErrorResult = {
	err: string;
	type: string;
};

export type TestsResults = {
	passed: number;
	failed: number;
	results: Array<TestData>;
};

type Dispatch = (action: KataAction | Dispatch) => void;

type KataContextProps = {
	state: KataState;
	dispatch: Dispatch;
};

type KataProviderProps = {
	children: ReactNode;
};

export type KataOutput =
	| {
			status: 'success' | 'failed';
			testResult: TestsResults;
	  }
	| {
			status: 'initial' | 'pending';
			text: string;
	  }
	| {
			status: 'error';
			error: ErrorResult;
	  };

type KataState = {
	output: KataOutput;
	codeAttempted?: string;
};

const initialState: KataState = {
	output: {
		status: 'initial',
		text: 'Your results will be shown here.',
	},
};

const KataContext = createContext<KataContextProps>({
	state: initialState,
	dispatch: () => {},
});

type Action<TType, TPayload = undefined> = TPayload extends undefined
	? { type: TType }
	: { type: TType; payload: TPayload };

type KataAction =
	| Action<'kata/test/started'>
	| Action<'kata/test/completed', TestsResults>
	| Action<'kata/test/failed', ErrorResult>
	| Action<'kata/attempt/started', { code: string }>
	| Action<'kata/attempt/completed', TestsResults>
	| Action<'kata/attempt/failed', ErrorResult>;

const kataReducer = (state = initialState, action: KataAction): KataState => {
	switch (action.type) {
		case 'kata/test/started':
			return {
				...state,
				output: {
					status: 'pending',
					text: 'Sending request...',
				},
			};
		case 'kata/test/completed':
			return {
				...state,
				output: {
					status: action.payload.failed > 0 ? 'failed' : 'success',
					testResult: action.payload,
				},
			};
		case 'kata/test/failed':
			return {
				...state,
				output: {
					status: 'error',
					error: action.payload,
				},
			};
		case 'kata/attempt/started':
			return {
				...state,
				output: {
					status: 'pending',
					text: 'Sending request...',
				},
				codeAttempted: action.payload.code,
			};
		case 'kata/attempt/completed':
			return {
				...state,
				output: {
					status: action.payload.failed > 0 ? 'failed' : 'success',
					testResult: action.payload,
				},
			};
		case 'kata/attempt/failed':
			return {
				...state,
				output: {
					status: 'error',
					error: action.payload,
				},
			};

		default:
			return state;
	}
};

export const testAction =
	(code: string, fixtures: string) => async (dispatch: any) => {
		dispatch({ type: 'kata/test/started' });
		const result = await kataService.testKata(code, fixtures);
		if (result.passed === 0 && result.failed === 0) {
			dispatch({
				type: 'kata/test/failed',
				payload: {
					err: `No output was produced. Make sure tests are written properly using \`describe\` and \`it\` (required for Node 10).`,
					type: 'STDERR',
				},
			});
			return;
		}

		const action = result.err ? 'kata/test/failed' : 'kata/test/completed';
		dispatch({ type: action, payload: result });
	};

export const attemptAction =
	(kataId: string, code: string) => async (dispatch: any) => {
		dispatch({ type: 'kata/attempt/started', payload: { code } });
		try {
			const result = await kataService.attemptKata(kataId, code);

			if (result.passed === 0 && result.failed === 0) {
				dispatch({
					type: 'kata/test/failed',
					payload: {
						err: `No output was produced. Make sure tests are written properly using \`describe\` and \`it\` (required for Node 10).`,
						type: 'STDERR',
					},
				});
				return;
			}

			const action = result.err
				? 'kata/test/failed'
				: 'kata/test/completed';
			dispatch({ type: action, payload: result });
		} catch (err) {
			const error: ErrorResult = {
				err: 'Something went wrong',
				type: 'UNKNOWN',
			};
			dispatch({
				type: 'kata/attempt/failed',
				payload: error,
			});
		}
	};

export const KataProvider: FC<KataProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(kataReducer, initialState);

	const customDispatch: Dispatch = (action: KataAction | Dispatch) => {
		if (typeof action === 'function') {
			action(customDispatch);
		} else {
			dispatch(action);
		}
	};

	return (
		<KataContext.Provider value={{ state, dispatch: customDispatch }}>
			{children}
		</KataContext.Provider>
	);
};

export const useKata = () => useContext(KataContext);
