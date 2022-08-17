import { FailedIcon, PassedIcon } from '../assets/icons';
import { useKata } from '../context';
import { getStatusBorder, hasHeader } from '../utils';
import { Collapsable } from './Collapsable';

export const Output = () => {
	const {
		state: { output },
	} = useKata();

	const status = getStatusBorder(output.status);

	const header = hasHeader(output);

	const statusColor =
		output.status === 'success'
			? 'border-[#3ba04d] dark:border-[#67b04b]'
			: 'border-[#b63d4c] dark:border-[#c45e49]';

	return (
		<div
			className={`bg-white dark:bg-[#131414] ${status} rounded-lg border-2 min-h-[200px] h-full`}
		>
			{header && (
				<div className="flex flex-row space-x-3 p-4 text-[#444] dark:text-[#eaeaea] border border-[#0000001a] dark:border-[#fff3] text-sm font-mono">
					<p>
						Time: {100 + Math.floor(Math.random() * (1000 - 100))}ms
					</p>
					{output.status === 'error' &&
						output.error.type === 'STDERR' && (
							<>
								<p className="text-[#c05c48] font-mono">
									Errors: 1
								</p>
								<p className="text-[#c05c48] font-mono">
									Exit Code: 1
								</p>
							</>
						)}
					{(output.status === 'failed' ||
						output.status === 'success') && (
						<>
							<p
								className={`${
									output.testResult?.passed &&
									'text-[#3ba04d] dark:text-[#67b04b]'
								}`}
							>
								Passed: {output.testResult?.passed}
							</p>
							<p
								className={`${
									output.testResult?.failed &&
									'text-[#c05c48]'
								}`}
							>
								Failed: {output.testResult?.failed}
							</p>
							{output.testResult?.failed > 0 && (
								<p className="text-[#c05c48]">Exit Code: 1</p>
							)}
						</>
					)}
				</div>
			)}
			<div className="p-4">
				{output.status === 'initial' && (
					<p className="text-[#444] dark:text-[#ffffff99] text-sm">
						{output.text}
					</p>
				)}
				{output.status === 'pending' && (
					<p className="text-dark dark:text-[#ffffff99] text-sm">
						<strong className="text-dark dark:text-gray-300">
							Status:
						</strong>{' '}
						{output.text}
					</p>
				)}
				{output.status === 'error' && (
					<>
						<div className="border-l-[5px] px-2 text-sm font-medium border-[#0000001a] dark:border-[#ffffff33] text-dark dark:text-[#eaeaea] font-sans -tracking-tighter">
							{output.error.type}
						</div>
						<pre className="font-mono border dark:text-[#eaeaea] bg-[#fffbfb] dark:bg-[#584747] border-[#b63d4c] dark:border-[#c05c48] p-3 text-sm rounded whitespace-pre-wrap my-4 overflow-x-auto -tracking-tighter">
							{output.error.err}
						</pre>
					</>
				)}

				{(output.status === 'failed' ||
					output.status === 'success') && (
					<>
						<div
							className={`border-l-[5px] px-2 mb-4 text-sm ${statusColor} text-dark dark:text-[#eaeaea] font-medium font-sans -tracking-tighter`}
						>
							Test Results:
						</div>
						{output.testResult.results.map((result, index) => {
							const color = !result.failed
								? 'text-[#3ba04d] dark:text-[#67b04b]'
								: 'text-[#b63d4c] dark:text-[#c05c48]';

							return (
								<div key={index}>
									<Collapsable
										color={color}
										text={result.parentTitle}
									>
										<Collapsable
											color={color}
											text={result.title}
											isNested
										>
											{!result.failed ? (
												<p
													className={`${color} font-mono flex flex-row items-center ml-6 my-2`}
												>
													<PassedIcon className="w-4 h-4 grow-0 shrink-0 basis-4" />
													<span className="ml-1.5">
														Test Passed
													</span>
												</p>
											) : (
												<p
													className={`${color} font-mono flex flex-row items-center ml-6 my-2`}
												>
													<FailedIcon className="w-4 h-4 grow-0 shrink-0 basis-4" />
													<span className="ml-1.5">
														expected{' '}
														{result.err?.expected}{' '}
														to equal{' '}
														{result.err?.actual}
													</span>
												</p>
											)}
										</Collapsable>
									</Collapsable>
								</div>
							);
						})}
					</>
				)}
				{output.status === 'success' && (
					<div className="text-[#3ba04d] dark:text-[#67b04b] border border-dashed border-[#3ba04d] dark:border-[#67b04b] tracking-wider p-4 my-8 text-xs font-bold">
						You have passed all of the tests! :&#41;
					</div>
				)}
			</div>
		</div>
	);
};
