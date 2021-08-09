import React, { useEffect } from "react";
import Countdown from "./Countdown";
import Jim from "./images/Jim.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faMapMarkerAlt,
	faBus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const YourTour = () => {
	const token = localStorage.getItem("token");

	useEffect(async () => {
		const results = await axios.post("http://localhost:5002/yourTour", {
			token,
		});
		console.log(results);
	}, []);

	return (
		<>
			<div>
				<h1>Your Tour</h1>
				<p>
					We're looking forward to welcoming you on board! Here's an overview of
					what you've booked...
				</p>
				<div className="yourTourContainer">
					<div className="yourTourCard">
						<h2>Departure Date</h2>
						<FontAwesomeIcon
							className="yourTourIcon"
							icon={faCalendarAlt}
							size="2x"
						/>
						<p>1st Jan 2022</p>
					</div>
					<div className="yourTourCard">
						<h2>Tour Name</h2>
						<FontAwesomeIcon className="yourTourIcon" icon={faBus} size="2x" />
						<p>Loch Ness and The Highlands</p>
					</div>
					<div className="yourTourCard">
						<h2>Departure City</h2>
						<FontAwesomeIcon
							className="yourTourIcon"
							icon={faMapMarkerAlt}
							size="2x"
						/>
						<p>Edinburgh</p>
					</div>
				</div>
				<div>
					<h2>Your Driver-Guide</h2>
					<p>Jim</p>
					<img className="driverGuide" src={Jim} alt="Driver-Guide Jim" />
				</div>

				<Countdown />
			</div>
		</>
	);
};

export default YourTour;
