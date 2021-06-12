import React from "react";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faAt,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
	return (
		<>
			<h1>Contact Us</h1>
			<p>We're delighted to have you on board with us soon!</p>

			<p>
				If you have any questions that aren't covered here, then don't hesitate
				to get in touch
			</p>

			<div className="contactContainer">
				<FontAwesomeIcon icon={faPhone} />
				0131 226 6066 (0730-1900 daily)
			</div>
			<div className="contactContainer">
				<FontAwesomeIcon icon={faAt} />
				tours@timberbushtours.com
			</div>
			<div className="contactContainer">
				<FontAwesomeIcon icon={faMapMarkerAlt} />
				555 Castlehill, Edinburgh, EH1 2ND
			</div>
			<p>Alternatively send us a message using the form below!</p>
			<ContactForm />
			<SocialMedia />
		</>
	);
};

export default Contact;
