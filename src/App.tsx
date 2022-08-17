import { Header, Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { KataPage, FourOhFourPage } from './pages';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Routes>
				<Route path="/" element={<KataPage />}></Route>
				<Route path="*" element={<FourOhFourPage />} />
			</Routes>
		</>
	);
}

export default App;
