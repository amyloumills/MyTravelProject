import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger({ page, setPage }) {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};
	const token = localStorage.getItem("token");
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
					<ul className="navLinks">
						{page === 0 && (
							<li
								onClick={() => {
									setPage(1);
									toggleHamburger();
								}}
							>
								Sign In
							</li>
						)}

						{page >= 1 && token && (
							<li
								onClick={() => {
									setPage(2);
									toggleHamburger();
								}}
							>
								Homepage
							</li>
						)}

						{page >= 1 && token && (
							<li
								onClick={() => {
									setPage(3);
									toggleHamburger();
								}}
							>
								Weather
							</li>
						)}

						{page >= 1 && token && (
							<li
								onClick={() => {
									setPage(4);
									toggleHamburger();
								}}
							>
								Your Tour
							</li>
						)}

						{page >= 1 && token && (
							<li
								onClick={() => {
									setPage(5);
									toggleHamburger();
								}}
							>
								Contact
							</li>
						)}
					</ul>
				</div>
			)}
		</>
	);
}
