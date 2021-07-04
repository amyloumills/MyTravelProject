import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<div className="App" id="outer-container">
				<div id="page-wrap">
					<Header />
					<Footer />
				</div>
			</div>
		</>
	);
};
export default App;
