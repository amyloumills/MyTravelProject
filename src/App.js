import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useState } from "react";

const App = () => {
	const [page] = useState(0);

	{
		page !== 1 && <NavBar />;
	}

	return (
		<>
			<NavBar />
			<Footer />
		</>
	);
};
export default App;
