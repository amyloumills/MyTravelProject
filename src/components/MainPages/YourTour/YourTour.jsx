import React, { useEffect, useState } from "react";
import TimerData from "./TimerData";
import Jim from "../images/Jim.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faMapMarkerAlt,
	faBus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import * as Constants from "../Utils/Constants";

const YourTour = () => {
	const token = localStorage.getItem("token");
	const [tourName, setTourName] = useState("");
	const [tourDate, setTourDate] = useState("");
	const [departureCity, setDepartureCity] = useState("");

	useEffect(() => {
		async function fetchData() {
			const results = await axios.post(Constants.TIMEURL, {
				token,
			});
			setTourName(results.data.results[0].tour);
			setTourDate(results.data.results[0].date);
			setDepartureCity(results.data.results[0].location);
		}
		fetchData();
	}, [token]);

	var date = tourDate.substr(0, 10);

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
						<p>{date}</p>
					</div>
					<div className="yourTourCard">
						<h2>Tour Name</h2>
						<FontAwesomeIcon className="yourTourIcon" icon={faBus} size="2x" />
						<p>{tourName}</p>
					</div>
					<div className="yourTourCard">
						<h2>Departure City</h2>
						<FontAwesomeIcon
							className="yourTourIcon"
							icon={faMapMarkerAlt}
							size="2x"
						/>
						<p>{departureCity}</p>
					</div>
				</div>
				<div>
					<h2>Your Driver-Guide</h2>
					<p>Jim</p>
					<img className="driverGuide" src={Jim} alt="Driver-Guide Jim" />
				</div>

				<TimerData />
			</div>
		</>
	);
};

export default YourTour;
