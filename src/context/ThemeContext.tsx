import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

type ThemeProviderProps = {
	children: ReactNode;
};

type ThemeContextProps = {
	theme: string;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
	theme: '',
	toggleTheme: () => {},
});

const changeTheme = (theme: string) => {
	localStorage.setItem('theme', theme);
	document.documentElement.setAttribute('data-theme', theme);
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		if (localStorage.theme) {
			setTheme(localStorage.theme);
			changeTheme(localStorage.theme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
			changeTheme('dark');
		} else {
			setTheme('light');
			changeTheme('light');
		}
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
			changeTheme('light');
		} else {
			setTheme('dark');
			changeTheme('dark');
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
