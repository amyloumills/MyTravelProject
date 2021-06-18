import React from "react";
import Weather from "./Weather";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import Contact from "./Contact";
import Countdown from "./Countdown";
import { useState } from "react";

const NavBar = () => {
	const [page, setPage] = useState(0);

	return (
		<>
			{page === 1 && <SignIn />}
			{page === 2 && <Weather />}
			{page === 3 && <Dashboard />}
			{page === 4 && <Countdown />}
			{page === 5 && <Contact />}

			<div className="Menu">
				<div onClick={() => setPage(1)}>Sign In</div>
				<div onClick={() => setPage(2)}>Weather</div>
				<div onClick={() => setPage(3)}>Dashboard</div>
				<div onClick={() => setPage(4)}>Countdown</div>
				<div onClick={() => setPage(5)}>Contact</div>
			</div>
		</>
	);
};

export default NavBar;