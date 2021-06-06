import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import { useState } from "react";

const App = () => {
	const [page, setPage] = useState(0);
	return (
		<>
			<Header />
			{page === 1 && <SignIn />}
			{page === 2 && <Weather />}
			{page === 3 && <Dashboard />}
			{page === 4 && <Contact />}
			<Footer />
			<div onClick={() => setPage(1)}>Sign In</div>
			<div onClick={() => setPage(2)}>Weather</div>
			<div onClick={() => setPage(3)}>Dashboard</div>
			<div onClick={() => setPage(4)}>Contact</div>
		</>
	);
};
export default App;
