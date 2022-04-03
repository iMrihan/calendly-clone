import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Mailer } from "./Components/Mailer/Mailer";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mailer" element={<Mailer />} />
			</Routes>
		</div>
	);
}

export default App;
