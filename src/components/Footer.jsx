import React from "react";
import { ReactComponent as Logo } from "./logo-horizontal.svg";

const Footer = () => {
	return (
		<>
			<div className="footerContainer">
				{/*Logo here is imported as a React component*/}
				<Logo className="logoHorizontal" />
				<span className="footerSpan">
					<h6>Terms and Conditions</h6>
					<h6>Privacy Policy</h6>
				</span>
			</div>
		</>
	);
};

export default Footer;
