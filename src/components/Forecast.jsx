import { useEffect, useState } from "react";
import axios from "axios";

const Forecast = () => {
	const apiKey = `a2e9f900ab03f983ca54c821ab03cb37`;

	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	const [weather, setWeather] = useState("");
	const [temperature, setTemperature] = useState(0);
	const [feelsLike, setFeelsLike] = useState(0);
	const [iconCode, setIconCode] = useState("");
	const [daily, setDaily] = useState([]);

	const savePositionToState = (position) => {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	};

	const getLocation = async () => {
		await window.navigator.geolocation.getCurrentPosition(savePositionToState);
	};

	useEffect(() => {
		getLocation();
	}, []);

	const getWeather = async () => {
		try {
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={minutely,hourly,alerts}&appid=${apiKey}&units=metric`
			);

			setTemperature(Math.round(response.data.current.temp));
			setWeather(response.data.current.weather[0].main);
			setFeelsLike(Math.round(response.data.current.feels_like));
			setIconCode(response.data.current.weather[0].icon);

			setDaily(response.data.daily); //this sets the forecast
		} catch (err) {
			console.error(err);
		}
	};
	//defensive checks
	useEffect(() => {
		if (longitude && latitude) getWeather();
	}, [latitude, longitude]);

	if (!temperature || !weather) {
		return <div className="container">Weather loading...</div>;
	}

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return (
		<>
			<h1>The Weather</h1>
			<div className="container">
				<div className="cards">
					<h2>SETNAME</h2>
					<h2>{temperature}ºC</h2>
					<h2>{weather}</h2>
					<h4>Feels like {feelsLike}ºC</h4>
					<img
						src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
						alt="weather icon"
					/>
				</div>
				<div>
					{daily.map((day, index) => {
						if (index == 0) return;

						const dateObject = new Date(day.dt * 1000); // unix time to readable date
						return (
							<p>
								THE DAY IS {days[dateObject.getDay()]} THE TEMP IS{" "}
								{Math.round(day.temp.max)}°C
							</p>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Forecast;
