import { DiscussIcon, ForwardIcon, LockIcon } from '../assets/icons';
import { useKata } from '../context';
import { testAction, attemptAction } from '../context';
import { useTab } from '../context/TabContext';
import { useEditor } from '../hooks/useEditor';
import { CodeEditor } from './CodeEditor';

export const EditorPanel = () => {
	const { code, fixtures, updateCode, updateFixtures, reset } = useEditor();
	const { state, dispatch } = useKata();
	const { setTab } = useTab();
	const onTest = () => {
		setTab('output');
		if (!code || !fixtures) {
			dispatch({
				type: 'kata/test/failed',
				payload: {
					type: 'SERVER_EXECUTION',
					err: 'Nothing to execute',
				},
			});
			return;
		}
		dispatch(testAction(code, fixtures));
	};

	const onAttempt = () => {
		setTab('output');
		if (!code || !fixtures) {
			dispatch({
				type: 'kata/attempt/failed',
				payload: {
					type: 'SERVER_EXECUTION',
					err: 'Nothing to execute',
				},
			});
			return;
		}

		dispatch(attemptAction('1234', code));
	};

	const withError =
		state.output.status === 'error' ||
		(state.output.status === 'failed' &&
			'editor-error' &&
			'border-l-2 border-[#b63d4c] dark:border-[#c45e49]');

	return (
		<div className="flex flex-col w-full md:w-7/12">
			<CodeEditor
				height="100%"
				value={code}
				className="text-sm h-full"
				wrapperStyle="md:h-[60%] mb-5"
				headerTitle="Solution"
				onChange={(value, _) => {
					updateCode(value);
				}}
			/>
			<CodeEditor
				value={fixtures}
				height="100%"
				maxHeight="100%"
				wrapperStyle="md:h-[40%] mb-5"
				className={`text-sm ${withError} h-full`}
				headerTitle="Sample Tests"
				onChange={(value, _) => {
					updateFixtures(value);
				}}
			/>
			<div className="flex flex-row justify-between flex-wrap gap-3 mb-2 md:mb-0 md:flex-nowrap md:gap-0 font-mono">
				<div className="flex flex-row space-x-2">
					<button className="btn no-border ">
						<ForwardIcon className="w-3 h-3 fill-[#6795de]" />
						<span className="ml-2 hidden xl:block">Skip</span>
					</button>
					<button className="btn no-border">
						<LockIcon className="w-3 h-3 fill-[#6795de]" />
						<span className="ml-2 hidden xl:block">
							Unlock Solutions
						</span>
					</button>
					<button className="btn no-border">
						<DiscussIcon className="w-3 h-3 fill-[#6795de]" />
						<span className="ml-2 hidden xl:block">Discuss</span>
					</button>
					<button className="btn no-border" onClick={reset}>
						Reset
					</button>
				</div>
				<div className="flex flex-row space-x-2">
					<button
						className="btn"
						onClick={onTest}
						disabled={state.output.status === 'pending'}
					>
						TEST
					</button>
					{state.codeAttempted === code &&
					state.output.status === 'success' ? (
						<button
							className="btn full no-border success"
							onClick={() => {
								window.location.reload();
							}}
						>
							SUBMIT
						</button>
					) : (
						<button
							className="btn full no-border"
							onClick={onAttempt}
							disabled={state.output.status === 'pending'}
						>
							ATTEMPT
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
