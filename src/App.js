import React from "react";
import "./App.scss";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import Countdown from "./components/Countdown";
import Error404 from "./components/Error404";
import YourTour from "./components/YourTour";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
	const [page, setPage] = useState(0);
	return (
		<>
			{page === 1 && <SignIn />}
			{page === 2 && <Weather />}
			{page === 3 && <Dashboard />}
			{page === 4 && <Countdown />}
			{page === 5 && <Contact />}
			<BrowserRouter>
				<Header />
				<section>
					<Switch>
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/weather" component={Weather} />
						<Route exact path="/error404" component={Error404} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/yourtour" component={YourTour} />
					</Switch>
				</section>
			</BrowserRouter>
			<Footer />
			<div onClick={() => setPage(1)}>Sign In</div>
			<div onClick={() => setPage(2)}>Weather</div>
			<div onClick={() => setPage(3)}>Dashboard</div>
			<div onClick={() => setPage(4)}>Countdown</div>
			<div onClick={() => setPage(5)}>Contact</div>
		</>
	);
};
export default App;
