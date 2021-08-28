import React from "react";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import SocialFeedFB from "./SocialFeedFB";
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
				<p>0131 226 6066 (0730-1900 daily)</p>
			</div>
			<div className="contactContainer">
				<FontAwesomeIcon icon={faAt} />
				<p>tours@timberbushtours.com</p>
			</div>
			<div className="contactContainer">
				<FontAwesomeIcon icon={faMapMarkerAlt} />
				<p>555 Castlehill, Edinburgh, EH1 2ND</p>
			</div>
			<ContactForm />
			<SocialMedia />
		</>
	);
};

export default Contact;
