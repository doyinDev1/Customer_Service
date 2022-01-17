import { Route, Routes } from 'react-router-dom';
import Learn from './components/pages/Learn/Learn';
import Login from './components/pages/Login/Login';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/learn" element={<Learn />} />
			</Routes>
		</>
	);
}

export default App;
