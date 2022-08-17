import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

type activeTabProps = 'output' | 'instructions';

type TabContextProps = {
	tab: activeTabProps;
	setTab: (tab: activeTabProps) => void;
};

export const TabContext = createContext<TabContextProps>({
	tab: 'instructions',
	setTab: () => {},
});

const initialActiveTab =
	(localStorage.getItem('activeTab') as activeTabProps) || 'instructions';

export const TabProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [activeTab, setActiveTab] =
		useState<activeTabProps>(initialActiveTab);

	useEffect(() => {
		localStorage.setItem('activeTab', activeTab);
	}, [activeTab]);

	const setTab = (tab: activeTabProps) => {
		setActiveTab(tab);
	};

	return (
		<TabContext.Provider value={{ tab: activeTab, setTab }}>
			{children}
		</TabContext.Provider>
	);
};

export const useTab = () => useContext(TabContext);
