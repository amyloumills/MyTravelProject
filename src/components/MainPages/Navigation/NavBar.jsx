import React from "react";
import Weather from "../Weather/Weather";
import Homepage from "../Homepage/Homepage";
import SignIn from "../SignIn/SignIn";
import Contact from "../Contact/Contact";
import YourTour from "../YourTour/YourTour";
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import NoBurger from "./NoBurger";
import ProblemSigningIn from "../SignIn/ProblemSigningIn";

const NavBar = () => {
	const [page, setPage] = useState(1);

	return (
		<>
			<div className="hamburger">
				<Hamburger page={page} setPage={setPage} />
			</div>
			<div className="noBurger">
				<NoBurger page={page} setPage={setPage} />
			</div>
			{page === 0 && <ProblemSigningIn setPage={setPage} />}
			{page === 1 && <SignIn setPage={setPage} />}
			{page === 2 && <Homepage />}
			{page === 3 && <Weather />}
			{page === 4 && <YourTour />}
			{page === 5 && <Contact />}
		</>
	);
};

export default NavBar;
