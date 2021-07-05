import React from "react";
import Weather from "./Weather";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import Contact from "./Contact";
import YourTour from "./YourTour";
import { useState } from "react";
import Hamburger from "./Hamburger";
import NoBurger from "./NoBurger";

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

			{page === 1 && <SignIn setPage={setPage} />}
			{page === 2 && <Homepage />}
			{page === 3 && <Weather />}
			{page === 4 && <YourTour />}
			{page === 5 && <Contact />}
		</>
	);
};

export default NavBar;
