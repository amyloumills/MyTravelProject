import React from "react";
import { ReactComponent as Logo } from "./logo-horizontal.svg";

const Footer = () => {
	return (
		<>
			<div className="footerContainer">
				{/*Logo here is imported as a React component*/}
				<Logo className="logoHorizontal" />
				<span className="footerSpan">
					<button className="termsButton">Terms and Conditions</button>
					<button className="termsButton">Privacy Policy</button>
				</span>
			</div>
		</>
	);
};

export default Footer;
