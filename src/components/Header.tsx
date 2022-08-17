import {
	BookmarkIcon,
	GithubIcon,
	MoonIcon,
	NotificationIcon,
	SunIcon,
} from '../assets/icons';
import { useTheme } from '../context';
import { useScrollDetection } from '../hooks';

const ToogleButton = () => {
	const { toggleTheme, theme } = useTheme();
	const Icon =
		theme === 'light' ? (
			<SunIcon
				className="w-6 h-6 dark:text-white cursor-pointer"
				onClick={toggleTheme}
			/>
		) : (
			<MoonIcon
				className="w-6 h-6 dark:text-white cursor-pointer"
				onClick={toggleTheme}
			/>
		);
	return Icon;
};

export const Header = () => {
	const isScrolled = useScrollDetection();
	const bg = isScrolled && 'bg-gray-100 dark:bg-[#121216]';
	return (
		<header
			className={`fixed top-0 right-0 flex flex-row space-x-4 py-2 px-4 items-center z-40 rounded-bl-lg ${bg} hover:bg-gray-100 dark:hover:bg-[#121216] transition-colors duration-200 ease-in-out`}
		>
			<ToogleButton />
			<a
				href="https://github.com/MiroiuGabriel/codewars"
				target="_blank"
				aria-label="github repo"
			>
				<GithubIcon className="w-6 h-6 dark:text-white hover:text-[#bb432c] dark:hover:text-[#bb432c] transition-colors duration-200 ease-in-out cursor-pointer" />
			</a>
			<BookmarkIcon className="w-6 h-6 dark:text-white hover:text-[#bb432c] dark:hover:text-[#bb432c] transition-colors duration-200 ease-in-out cursor-pointer" />
			<NotificationIcon className="w-6 h-6 dark:text-white hover:text-[#bb432c] dark:hover:text-[#bb432c] transition-colors duration-200 ease-in-out cursor-pointer" />
			<img
				src="https://avatars.githubusercontent.com/u/62898193?s=100"
				className="w-8 h-8 rounded-full select-none cursor-pointer"
				alt="profile"
			/>
		</header>
	);
};
