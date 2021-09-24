import React from "react";
import "./App.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";

//page 0 = Problems Signing In
//page 1 = Sign In
//page 2 = Homepage
//page 3 = Weather
//page 4 = Your Tour
//page 5 = Contact
//page 6 = Terms

const App = () => {
	return (
		<>
			<Header />
			<Footer />;
		</>
	);
};
export default App;
