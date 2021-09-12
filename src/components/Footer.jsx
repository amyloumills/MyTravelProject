import React from "react";
import { ReactComponent as Logo } from "./logo-horizontal.svg";

const Footer = (props) => {
	return (
		<>
			<div className="footerContainer">
				{/*Logo here is imported as a React component*/}
				<Logo className="logoHorizontal" />
				<span className="footerSpan">
					<button
						className="termsButton"
						onClick={() => {
							props.setPage(6);
						}}
					>
						Terms and Conditions
					</button>
					<button className="termsButton">Privacy Policy</button>
				</span>
			</div>
		</>
	);
};

export default Footer;
