import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [weather, setWeather] = useState("");
	const [temperature, setTemperature] = useState(0);
	const [cityName, setCityName] = useState("");
	const [feelsLike, setFeelsLike] = useState(0);
	const [iconCode, setIconCode] = useState("");

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
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a2e9f900ab03f983ca54c821ab03cb37&units=metric`
			);
			setTemperature(Math.round(res.data.main.temp));
			setCityName(res.data.name);
			setWeather(res.data.weather[0].main);
			setFeelsLike(Math.round(res.data.main.feels_like));
			setIconCode(res.data.weather[0].icon);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (longitude && latitude) getWeather();
	}, [latitude, longitude]);
	console.log(weather);
	if (!cityName || !temperature || !weather) {
		return <div className="container">Weather loading...</div>;
	}

	return (
		<>
			<h1>The Weather</h1>
			<div className="container">
				<div className="cards">
					<h2>{cityName}</h2>
					<h2>{temperature}ºC</h2>
					<h2>{weather}</h2>
					<h4>Feels like {feelsLike}ºC</h4>
					<img
						src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
						alt="weather icon"
					/>
				</div>
			</div>
		</>
	);
};
export default Weather;
