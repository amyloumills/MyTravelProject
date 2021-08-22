import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Countdown from "./Countdown";
import { RotateSpinner } from "react-spinners-kit";

const TimerData = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");
	const [countdownDate, setCountdownDate] = useState(0);

	const token = localStorage.getItem("token");

	useEffect(async () => {
		const results = await axios.post("https://api.timbertours.co.uk/yourTour", {
			token,
		});

		const unixTime = new Date(results.data.results[0].date);
		setCountdownDate(unixTime.getTime());
	}, []);

	var interval = useRef();

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
			const seconds = (timeDifference % (1000 * 60)) / 1000; //unix time to seconds

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
		}, 50);
	};
	useEffect(() => {
		if (countdownDate === 0 || null) {
			return <RotateSpinner size={45} color="#686769" className="spinner" />;
		} else {
			startTimer();
		}
	});

	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<>
			<Countdown
				timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
		</>
	);
};

export default TimerData;
