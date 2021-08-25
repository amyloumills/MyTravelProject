import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import YourTour from "./components/MainPages/YourTour/YourTour";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/MainPages/Homepage/Homepage";

import SignIn from "./components/MainPages/SignIn/SignIn";

//page 0 = Problems Signing In
//page 1 = Sign In
//page 2 = Homepage
//page 3 = Weather
//page 4 = Your Tour
//page 5 = Contact

const App = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));

	return (
		<>
			{token !== null ? <Homepage /> : <SignIn />}
			<Footer />;
		</>
	);
};
export default App;
