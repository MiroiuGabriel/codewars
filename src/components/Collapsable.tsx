import { FC, ReactNode, useState } from 'react';
import { CarretDownIcon } from '../assets/icons';

type CollapsableProps = {
	text?: string;
	color: string;
	children?: ReactNode;
	isNested?: boolean;
};

export const Collapsable: FC<CollapsableProps> = ({
	text,
	children,
	color,
	isNested,
}) => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<div
			className={`flex flex-col py-1 my-2 ${
				isNested && 'ml-6'
			} select-none`}
		>
			<div
				className="flex flex-row space-x-2 cursor-pointer"
				onClick={() => setCollapsed(prev => !prev)}
			>
				<CarretDownIcon
					className={`w-4 h-4 grow-0 shrink-0 basis-4 mt-0.5 ${color} ${
						!collapsed && '-rotate-90'
					}`}
				/>
				<p
					className={`text-sm ${
						isNested && collapsed
							? `${color}`
							: 'text-dark dark:text-[#eaeaea]'
					} font-sans -tracking-tighter font-medium`}
				>
					{text}
				</p>
			</div>
			{collapsed && (
				<>
					{children}
					<p
						className={`text-dark dark:text-[#ffffff99] font-sans tracking-wide text-[11px] font-medium ml-6 ${
							isNested && 'ml-6'
						}`}
					>
						Completed in {2 + Math.floor(Math.random() * (100 - 2))}
						ms
					</p>
				</>
			)}
		</div>
	);
};
