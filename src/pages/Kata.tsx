import { FC } from 'react';
import { Main, Output, Tabs } from '../components';
import { EditorPanel } from '../components/EditorPanel';
import { KataProvider } from '../context';
import { TabProvider } from '../context/TabContext';

export const KataPage: FC = () => {
	return (
		<Main>
			<KataProvider>
				<div className="flex flex-col md:flex-row md:space-x-4 md:h-[calc(100vh-70px)]">
					<TabProvider>
						<Tabs />
						<EditorPanel />
					</TabProvider>
				</div>
			</KataProvider>
		</Main>
	);
};
