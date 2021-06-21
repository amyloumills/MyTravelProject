import React from "react";
import Weather from "./Weather";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Contact from "./Contact";
import Countdown from "./Countdown";
import { useState } from "react";

const NavBar = () => {
	const [page, setPage] = useState(0);

	return (
		<>
			<div className="menu">
				<div className="menuItem">
					{page === 0 && <div onClick={() => setPage(1)}>Sign In</div>}
				</div>
				<div className="menuItem">
					{page > 1 && <div onClick={() => setPage(2)}>Homepage</div>}
				</div>
				<div className="menuItem">
					{page > 1 && <div onClick={() => setPage(3)}>Weather</div>}
				</div>
				<div className="menuItem">
					{page > 1 && <div onClick={() => setPage(4)}>Countdown</div>}
				</div>
				<div className="menuItem">
					{page > 1 && <div onClick={() => setPage(5)}>Contact</div>}
				</div>
			</div>
			{page === 1 && <SignIn setPage={setPage} />}
			{page === 2 && <Homepage />}
			{page === 3 && <Weather />}
			{page === 4 && <Countdown />}
			{page === 5 && <Contact />}
		</>
	);
};

export default NavBar;
