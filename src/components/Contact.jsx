import React from "react";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

const Contact = () => {
	return (
		<>
			<h1>Contact Us</h1>
			<ContactForm />
			<h4>Tel: 0131 226 6066 (0730-1900 daily)</h4>
			<h4>Email: tours@timberbushtours.com</h4>
			<h4>find us on:</h4>
			<SocialMedia />
		</>
	);
};

export default Contact;
