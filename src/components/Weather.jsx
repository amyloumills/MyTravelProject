import React from "react";

import Forecast from "./Forecast";

const Weather = () => {
	return (
		<>
			<p>The weather where you are...</p>
			<Forecast />

			<p>Here is the weather forecast for your departure location:</p>

			<button>Edinburgh</button>
			<button>Glasgow</button>
			<button>Inverness</button>
		</>
	);
};

export default Weather;
