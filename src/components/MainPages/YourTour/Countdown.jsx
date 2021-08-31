import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const Countdown = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
	//SVG CIRCLE - Working out the radius
	const daysRadius = mapNumber(timerDays, 40, 0, 40, 360);
	const hoursRadius = mapNumber(timerHours, 24, 0, 0, 360);
	const minutesRadius = mapNumber(timerMinutes, 60, 0, 0, 360);
	const secondsRadius = mapNumber(timerSeconds, 60, 0, 0, 360);

	return (
		<>
			<h2 className="countdownHeader">Countdown...</h2>
			<FontAwesomeIcon className="stopWatch" icon={faStopwatch} size="2x" />

			<div className="countdownContainer">
				{timerDays >= 0 && (
					<div className="countdownItem">
						<SVGCircle radius={daysRadius} />
						{timerDays}
						<span>Days</span>
					</div>
				)}
				{timerHours >= 0 && (
					<div className="countdownItem">
						<SVGCircle radius={hoursRadius} />
						{timerHours}
						<span>Hours</span>
					</div>
				)}
				{timerMinutes >= 0 && (
					<div className="countdownItem">
						<SVGCircle radius={minutesRadius} />
						{timerMinutes}
						<span>Minutes</span>
					</div>
				)}
				{timerSeconds >= 0 && (
					<div className="countdownItem">
						<SVGCircle radius={secondsRadius} />
						{Math.round(timerSeconds)}
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
		<defs>
			<linearGradient id="myGradient" gradientTransform="rotate(90)">
				<stop offset="5%" stopColor="#bdb0bd" />
				<stop offset="95%" stopColor="#754d78" />
			</linearGradient>
		</defs>
		<path
			fill="none"
			stroke="url('#myGradient')"
			strokeWidth="4"
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
