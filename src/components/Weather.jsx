import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [weather, setCurrentWeather] = useState("");
	const [temperature, setCurrentTemperature] = useState(0);
	const [cityName, setCityName] = useState("");
	const [feelsLike, setCurrentFeelsLike] = useState(0);
	const [iconCode, setCurrentIconCode] = useState("");

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
				`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&units=metric&appid=a2e9f900ab03f983ca54c821ab03cb37`
			);
			setCurrentTemperature(Math.round(res.data.current.temp));
			setCityName(res.data.name);
			setCurrentWeather(res.data.current.weather[0]);
			setCurrentFeelsLike(Math.round(res.data.current.feels_like));
			setCurrentIconCode(res.data.current.weather[0].icon);
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
