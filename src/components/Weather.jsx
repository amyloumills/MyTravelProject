import React from "react";

import Forecast from "./Forecast";
import ReverseGeo from "./ReverseGeo";

const Weather = () => {
	return (
		<>
			<h1>The Weather</h1>
			<ReverseGeo />
			<Forecast />

			<p>Here is the weather forecast for your departure location:</p>

			<button>Edinburgh</button>
			<button>Glasgow</button>
			<button>Inverness</button>
		</>
	);
};

export default Weather;
