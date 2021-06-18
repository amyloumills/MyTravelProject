import React from "react";
// import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useState } from "react";

const App = () => {
	const [page, setPage] = useState(2);

	return (
		<>
			{page !== 1 && <NavBar />}
			<Footer />
		</>
	);
};
export default App;
