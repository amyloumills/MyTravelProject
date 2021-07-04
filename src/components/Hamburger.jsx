import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger({ page, setPage }) {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};
	return (
		<>
			<div className="hamburger" onClick={toggleHamburger}>
				<FontAwesomeIcon
					icon={faBars}
					className="faBars"
					size="2x"
					onClick={toggleHamburger}
				/>
			</div>
			{hamburgerOpen && (
				<div className="burgerNav">
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
