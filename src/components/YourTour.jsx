import React from "react";
import Countdown from "./Countdown";
import Jim from "./images/Jim.png";

const YourTour = () => {
	return (
		<>
			<div className="yourTourInfo">
				<h1>Your Tour</h1>
				<p>We're looking forward to welcoming you on board! </p>
				<p>Here's an overview of what you've booked...</p>

				<h2>Tour Name</h2>
				<p>The Ultimate Whisky Tour</p>
				<h2>Tour Departure Date</h2>
				<p>1st Jan 2022</p>
				<h2>Your Driver-Guide</h2>
				<p>Jim</p>
				<img className="driverGuide" src={Jim} alt="Driver-Guide Jim" />
				<Countdown />
			</div>
		</>
	);
};

export default YourTour;
