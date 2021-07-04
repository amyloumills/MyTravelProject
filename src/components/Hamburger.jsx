import React from "react";
import { useState } from "react";

export default function Hamburger({ page, setPage }) {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};
	return (
		<>
			<div className="hamburger" onClick={toggleHamburger}>
				{/* <Hamburger isOpen={hamburgerOpen} /> */}
				<button onClick={toggleHamburger}>BURGER</button>
			</div>
			{hamburgerOpen && (
				<div className="navigation">
					<ul>
						{page === 0 && <li onClick={() => setPage(1)}>Sign In</li>}

						{page > 1 && <li onClick={() => setPage(2)}>Homepage</li>}

						{page > 1 && <li onClick={() => setPage(3)}>Weather</li>}

						{page > 1 && <li onClick={() => setPage(4)}>Your Tour</li>}

						{page > 1 && <li onClick={() => setPage(5)}>Contact</li>}
					</ul>
				</div>
			)}
		</>
	);
}
