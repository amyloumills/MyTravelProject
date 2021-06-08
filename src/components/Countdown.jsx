import React, { useEffect, useState } from "react";

const Countdown = () => {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();

		//the first date will be the date of the tour. The second todays' date
		const timeDifference = +new Date(`10/10/${year}`) - +new Date();

		let timeLeft = {};

		//check if the time left before the tour is greater than 0

		if (timeDifference > 0) {
			timeLeft = {
				days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((timeDifference / 1000 / 60) % 60),
				seconds: Math.floor((timeDifference / 1000) % 60),
			};
		}
		//return timeLeft for use in the component
		return timeLeft;
	};
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [year] = useState(new Date().getFullYear());
	const [month] = useState(new Date().getMonth());
	const [day] = useState(new Date().getDay());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});
	return (
		<div>
			<h2>Your Tour Countdown to 10/10/2022</h2>
			{timerComponents.length ? timerComponents : <span>Time to Tour!</span>}
		</div>
	);
};

export default Countdown;
