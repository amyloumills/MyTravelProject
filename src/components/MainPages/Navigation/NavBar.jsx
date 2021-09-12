import React from "react";
import Weather from "../Weather/Weather";
import Homepage from "../Homepage/Homepage";
import SignIn from "../SignIn/SignIn";
import Contact from "../Contact/Contact";
import YourTour from "../YourTour/YourTour";
import { useState } from "react";
import Hamburger from "./Hamburger";
import NoBurger from "./NoBurger";
import ProblemSigningIn from "../SignIn/ProblemSigningIn";
import Terms from "../Terms";

const NavBar = () => {
	const [page, setPage] = useState(1);
	const token = localStorage.getItem("token");

	return (
		<>
			<div className="hamburger">
				<Hamburger page={page} setPage={setPage} />
			</div>

			<div className="noBurger">
				<NoBurger page={page} setPage={setPage} />
			</div>

			{token == null && page === 0 && <ProblemSigningIn setPage={setPage} />}
			{token == null && page === 1 && <SignIn setPage={setPage} />}
			{token && page === 1 && <Homepage />}
			{token && page === 2 && <Homepage />}
			{token && page === 3 && <Weather />}
			{token && page === 4 && <YourTour />}
			{token && page === 5 && <Contact />}
			{token && page === 6 && <Terms />}
		</>
	);
};

export default NavBar;
