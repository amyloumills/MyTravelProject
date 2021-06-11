import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date("Dec 1, 2021 00:00:00").getTime();

		interval = setInterval(() => {
			const timeNow = new Date().getTime();
			const timeDifference = countdownDate - timeNow; //gets the time difference between now and the countdown date

			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

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
			<div>
				<section>
					<p>{timerDays}</p>
					<p>Days</p>
				</section>
				<section>
					<p>{timerHours}</p>
					<p>Hours</p>
				</section>
				<section>
					<p>{timerMinutes}</p>
					<p>Minutes</p>
				</section>
				<section>
					<p>{timerSeconds}</p>
					<p>Seconds</p>
				</section>
			</div>
		</>
	);
};

export default Countdown;
