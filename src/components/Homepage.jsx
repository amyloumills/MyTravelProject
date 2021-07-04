import React from "react";
import Skye from "./images/SkyeCrop.png";
import mobileSkyeView from "./images/mobileSkyeView.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
	return (
		<>
			<h1>Homepage</h1>
			<h3>Failte gu Alba, NAME!</h3>
			<div className="dashboardImage">
				<img src={Skye} alt="Isle of Skye" />
			</div>
			<div className="dashboardImgMobile">
				<img src={mobileSkyeView} alt="Coach on Skye" />
			</div>
			<p>
				And a warm welcome to Scotland! We're looking forward to welcoming you
				on tour!
			</p>
			<p>
				Whether you're departing from Edinburgh, Glasgow or Inverness; we're
				sure you will enjoy your time on board with us.
			</p>
			<p>
				Here, you can view our translations, read our FAQs, find out more about
				your tour and even view the upcoming weather.
			</p>
			<FontAwesomeIcon className="translations" icon={faLanguage} size="2x" />
			<h3>Translations</h3>

			<p>
				We offer translations of your tour in 7 different languages. To
				download, click on the button below:
			</p>
			<div>
				<button>Translations</button>
			</div>
		</>
	);
};

export default Homepage;
