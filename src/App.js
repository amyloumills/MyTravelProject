import React from "react";
import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error404 from "./components/MainPages/Error404";
import Homepage from "./components/MainPages/Homepage/Homepage";

const App = ({ page, setPage }) => {
	const [token, setToken] = useState(localStorage.getItem("token") || "");

	//console.log("Hi it's the", token);
	if (token) {
		//console.log("HEY IM HERE!");
		{
			page === 2 && <Homepage />;
		}
	} else {
		return <Error404 />;
	}
	return (
		<>
			<Header />
			<Footer />
		</>
	);
};
export default App;
