import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconType } from '../assets/icons';
import { navbarContent } from '../fixtures';
import { useHover } from '../hooks';

type NavbarLinkProps = {
	Icon: React.FC<IconType>;
	label: string;
	description: string;
	isVisible: boolean;
	link: string;
	isFirst: boolean;
	isExternal: boolean;
};

const NavbarSection: React.FC<{ label: string; isVisible: boolean }> = ({
	label,
	isVisible,
}) => {
	const css = isVisible
		? 'text-[#a1a1a1] scale-100  ml-3'
		: 'text-transparent w-2 rounded-lg scale-50 pl-2 pr-2 ml-[18px] bg-[#ffffff26]';
	return (
		<li
			className={`mt-4 mb-2 ${css} transition-all ease-in duration-300 h-4`}
		>
			<span className="uppercase leading-4 text-xs font-bold tracking-widest">
				{label}
			</span>
		</li>
	);
};

const NavLink: React.FC<{
	isExternal: boolean;
	children: React.ReactNode;
	className?: string;
	link: string;
}> = ({ isExternal, children, link, className }) => {
	return isExternal ? (
		<a href={link} className={className} target="_blank">
			{children}
		</a>
	) : (
		<Link to={link} className={className}>
			{children}
		</Link>
	);
};

const NavbarLink: React.FC<NavbarLinkProps> = ({
	Icon,
	label,
	description,
	isVisible,
	isFirst,
	link,
	isExternal = false,
}) => {
	const opacity = isVisible ? 'opacity-100' : 'opacity-0';
	const route = useLocation();
	const labelColor =
		route.pathname === link ? 'text-white' : 'text-[#c1c1c1]';

	return (
		<li className="group min-w-[320px] hover:bg-[#ffffff1a] px-2 py-2">
			<NavLink
				className="cursor-pointer"
				isExternal={isExternal}
				link={link}
			>
				<div className="flex flex-row items-center space-x-2">
					<div>
						{isFirst ? (
							<div className="h-9 w-9">
								<img
									src="/codewars.svg"
									className="w-full h-full"
									alt="logo"
								/>
							</div>
						) : (
							<Icon
								className={`w-6 h-6 ${labelColor}  group-hover:text-[#6795de] ml-1.5 mt-1`}
							/>
						)}
					</div>
					<div className="flex flex-col">
						<div
							className={`font-bold text-base ${labelColor} leading-6 ${opacity} transition-opacity ease-in-out duration-300`}
						>
							<span className="group-hover:text-[#6795de] transition-colors ease-in-out duration-200">
								{label}
							</span>
						</div>
						<div
							className={`text-xs text-[#a1a1a1] ${opacity} transition-opacity ease-in-out duration-300`}
						>
							{description}
						</div>
					</div>
				</div>
			</NavLink>
		</li>
	);
};

export const Navbar = () => {
	const { hovering, onMouseEnter, onMouseLeave } = useHover();
	const width = hovering ? 'w-[320px]' : 'w-[55px]';

	return (
		<div
			className={`bg-gray-800 dark:bg-[#121216] h-full fixed top-0 overflow-hidden z-40 transition-width ease-in duration-300 scrollbar hidden md:block ${width} ${
				hovering && 'border-r border-r-[#ffffff1a] overflow-y-auto'
			}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<ul className="mb-10 py-2">
				{navbarContent.map((item, i) =>
					item.type === 'section' ? (
						<NavbarSection
							label={item.label}
							isVisible={hovering}
							key={item.id}
						/>
					) : (
						<NavbarLink
							Icon={item.icon!}
							description={item.description!}
							label={item.label}
							key={item.id}
							isVisible={hovering}
							link={item.link!}
							isFirst={i === 0}
							isExternal={item.isExternal!}
						/>
					)
				)}
			</ul>
		</div>
	);
};
