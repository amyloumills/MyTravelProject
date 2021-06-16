import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const SocialMedia = () => {
	return (

		<div className="socialContainer">
			<h4>Follow Us:</h4>
			<a
				href="http://www.youtube.com/timberbushtours"
				className="youtube social"
			>
				<FontAwesomeIcon icon={faYoutube} size="2x" />
			</a>
			<a
				href="https://www.facebook.com/timberbushtours/"
				className="facebook social"
			>
				<FontAwesomeIcon icon={faFacebook} size="2x" />
			</a>
			<a
				href="https://www.twitter.com/timberbushtours"
				className="twitter social"
			>
				<FontAwesomeIcon icon={faTwitter} size="2x" />
			</a>
			<a
				href="https://www.instagram.com/timberbushtours"
				className="instagram social"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
		</div>
		
	);
};

export default SocialMedia;
