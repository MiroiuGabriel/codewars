import { useTab } from '../context/TabContext';
import { Instructions } from './Instructions';
import { Output } from './Output';

export const Tabs = () => {
	const { tab, setTab } = useTab();
	return (
		<div className="flex flex-col h-full overflow-y-auto w-full md:w-5/12 mb-4 md:mb-0">
			<div className="flex flex-row mb-2 overflow-hidden text-sm">
				<div
					className={`tab ${tab === 'instructions' && 'active'}`}
					onClick={() => setTab('instructions')}
				>
					Instructions
				</div>
				<div
					className={`tab ${tab === 'output' && 'active'}`}
					onClick={() => setTab('output')}
				>
					Output
				</div>
			</div>
			{tab === 'instructions' && <Instructions />}
			{tab === 'output' && <Output />}
		</div>
	);
};
