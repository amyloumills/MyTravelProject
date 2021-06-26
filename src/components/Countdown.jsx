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

	//SVG CIRCLE - Working out the radius
	const daysRadius = mapNumber(timerDays, 30, 0, 0, 360);
	const hoursRadius = mapNumber(timerHours, 24, 0, 0, 360);
	const minutesRadius = mapNumber(timerMinutes, 60, 0, 0, 360);
	const secondsRadius = mapNumber(timerSeconds, 60, 0, 0, 360);

	//if there are no seconds, return nothing
	if (!timerSeconds) {
		return 0;
	}

	return (
		<>
			<h2 className="countdownHeader">Countdown...</h2>
			<FontAwesomeIcon className="stopWatch" icon={faStopwatch} size="2x" />

			<div className="countdownContainer">
				{timerDays && (
					<div className="countdownItem">
						<SVGCircle radius={daysRadius} />
						{timerDays}
						<span>Days</span>
					</div>
				)}
				{timerHours && (
					<div className="countdownItem">
						<SVGCircle radius={hoursRadius} />
						{timerHours}
						<span>Hours</span>
					</div>
				)}
				{timerMinutes && (
					<div className="countdownItem">
						<SVGCircle radius={minutesRadius} />
						{timerMinutes}
						<span>Minutes</span>
					</div>
				)}
				{timerSeconds && (
					<div className="countdownItem">
						<SVGCircle radius={secondsRadius} />
						{timerSeconds}
						<span>Seconds</span>
					</div>
				)}
			</div>
			<div>
				<p>Until your tour departs!</p>
			</div>
		</>
	);
};
//code for displaying the SVG
const SVGCircle = ({ radius }) => (
	<svg className="countdownSVG">
		<path
			fill="none"
			stroke="#333"
			stroke-width="4"
			d={describeArc(50, 50, 48, 0, radius)}
		/>
	</svg>
);

// from StackOverflow - to map the date values to their corresponding radius
function mapNumber(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
//calculation taken from Stackoverflow to calculate the SVG path for the arc of a circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
}

function describeArc(x, y, radius, startAngle, endAngle) {
	var start = polarToCartesian(x, y, radius, endAngle);
	var end = polarToCartesian(x, y, radius, startAngle);

	var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

	var d = [
		"M",
		start.x,
		start.y,
		"A",
		radius,
		radius,
		0,
		largeArcFlag,
		0,
		end.x,
		end.y,
	].join(" ");

	return d;
}
export default Countdown;
