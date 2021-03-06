import { useEffect, useState } from "react";
import axios from "axios";
import { RotateSpinner } from "react-spinners-kit";
import * as Constants from "../Utils/Constants";

const Forecast = () => {
	const [weather, setWeather] = useState("");
	const [temperature, setTemperature] = useState(0);
	const [feelsLike, setFeelsLike] = useState(0);
	const [iconCode, setIconCode] = useState("");
	const [daily, setDaily] = useState([]);
	const [location, setLocation] = useState("");
	const token = localStorage.getItem("token");

	const getWeather = async () => {
		try {
			const response = await axios.post(
				Constants.WEATHERURL,
				{
					token,
				},
				[]
			);

			setTemperature(Math.round(response.data.weatherResult.current.temp));
			setWeather(response.data.weatherResult.current.weather[0].main);
			setFeelsLike(Math.round(response.data.weatherResult.current.feels_like));
			setIconCode(response.data.weatherResult.current.weather[0].icon);
			setDaily(response.data.weatherResult.daily); //this sets the forecast
			setLocation(response.data.results.location);
		} catch (err) {
			console.error(err);
		}
	};
	//defensive checks
	useEffect(() => {
		getWeather();
	}, []);

	if (!temperature || !weather) {
		return <RotateSpinner size={45} color="#686769" className="spinner" />;
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
			<div className="container">
				<div className="cards">
					<h2>The weather forecast in {location}</h2>
					<h2>{temperature}ºC</h2>
					<h2>{weather}</h2>
					<h4>Feels like {feelsLike}ºC</h4>
					<img
						src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
						alt="weather"
						className="weatherIcon"
					/>
				</div>
				<div>
					{daily.map((day, index) => {
						if (index === 0 || index >= 6) {
							return;
						} //removing today's forecast in the tiles

						const dateObject = new Date(day.dt * 1000); // unix time to readable date
						return (
							<div className="forecastContainer">
								<p className="forecastItem">{days[dateObject.getDay()]}</p>
								<img
									className="forecastImage"
									alt="forecast"
									src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} //adding in icons
								/>
								<p className="forecastItem">{Math.round(day.temp.max)}°C</p>
								<p className="feelsLikeForecast">
									Feels Like {Math.round(day.feels_like.day)}°C
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Forecast;
