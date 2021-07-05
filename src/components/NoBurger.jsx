import React from "react";
import transparentLogo from "./images/transparentLogo.png";

export default function NoBurger({ page, setPage }) {
	return (
		<>
			<div className="noBurgerNav">
				<ul>
					{page === 0 && <li onClick={() => setPage(1)}>Sign In</li>}

					{page > 1 && <li onClick={() => setPage(2)}>Homepage</li>}

					{page > 1 && <li onClick={() => setPage(3)}>Weather</li>}

					{page > 1 && <li onClick={() => setPage(4)}>Your Tour</li>}

					{page > 1 && <li onClick={() => setPage(5)}>Contact</li>}
				</ul>
			</div>
		</>
	);
}
