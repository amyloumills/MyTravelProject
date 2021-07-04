import React from "react";
import Skye from "./images/SkyeCrop.png";

const Homepage = () => {
	return (
		<>
			<h1>Homepage</h1>
			<h3>Failte gu Alba, NAME!</h3>
			{/* <div className="dashboardImage">
				<img src={Skye} alt="Isle of Skye" />
			</div> */}
			<p>
				And a warm welcome to Scotland! We're looking forward to welcoming you
				on tour! Here, you can find all your details about your tour, the
				upcoming weather, and a countdown to your tour date.
			</p>
			<p>
				For translations or attraction tickets, Visit the 'Your Tour' page,
				where you can amend your booking, purchase attraction tickets or view
				our FAQs.
			</p>
			<div>
				{/* <div className="dashboardContainer">
					<img className="dbImg" src={coachrear} alt="coach"></img>
					<button className="dashboardButton">Contact Us</button>
				</div>
				<div className="dashboardContainer">
					<img className="dbImg" src={cruise} alt="cruise"></img>
					<button className="dashboardButton">Your Tour</button>
				</div>

				<div className="dashboardContainer">
					<img className="dbImg" src={coachside} alt="coach"></img>
					<button className="dashboardButton">Countdown</button>
				</div>
				<div className="dashboardContainer">
					<img className="dbImg" src={sunset} alt="sunset"></img>
					<button className="dashboardButton">Weather</button>
				</div> */}
			</div>
		</>
	);
};

export default Homepage;
