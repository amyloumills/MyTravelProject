import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const countdownDate = new Date().getTime() + 86400000 * 3; //three days in the future. Has to be here as the function constantly updates the state

const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");

	let interval = useRef();

	const startTimer = () => {
		interval = setInterval(() => {
			const timeDifference = countdownDate - new Date().getTime(); //gets the time difference between now and the countdown date

			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //unix time to days, etc
			const hours = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) // unix time to hours
			);
			const minutes = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60) //unix time to minutes
			);
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); //unix time to seconds

			if (timeDifference < 0) {
				//stop timer
				clearInterval(interval.current);
			} else {
				//update time
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};
	//componentdidmount
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	});

	return (
		<>
			<h1>Your tour</h1>
			<p>
				We're looking forward to welcoming you on board! Here's an overview of
				what you've booked...
			</p>
			<h2>Tour Name</h2>
			<p>The Ultimate Whisky Tour</p>
			<h2>Tour Departure Date</h2>
			<p>1st Jan 2022</p>
			<h2>Your Driver-Guide</h2>
			<p>Billy</p>
			<h2>Countdown...</h2>

			<FontAwesomeIcon className="stopWatch" icon={faStopwatch} size="2x" />
			<div className="countdownContainer">
				<div>
					<p>{timerDays}</p>
					<p>Days</p>
				</div>
				<div>
					<p>{timerHours}</p>
					<p>Hours</p>
				</div>
				<div>
					<p>{timerMinutes}</p>
					<p>Minutes</p>
				</div>
				<div>
					<p>{timerSeconds}</p>
					<p>Seconds</p>
				</div>
				<div>
					<p>Until your tour departs!</p>
				</div>
			</div>
		</>
	);
};

export default Countdown;
