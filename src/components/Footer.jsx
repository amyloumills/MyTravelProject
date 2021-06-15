import React from "react";
import { ReactComponent as Logo } from "./logo-horizontal.svg";

const Footer = () => {
	return (
		<div className="footerContainer">
			{/*Logo here is imported as a React component*/}
			<Logo className="logoHorizontal" />
		</div>
	);
};

export default Footer;
