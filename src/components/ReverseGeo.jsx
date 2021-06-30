import { useEffect, useState } from "react";
import axios from "axios";

const ReverseGeo = () => {
	const googleapiKey = `AIzaSyANa5ItcCEybBMv60dI-9_PUQT_dL1y0Ko`;
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [cityName, setCityName] = useState(""); //Google Maps Reverse Geocode

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

	const reverseGeo = async () => {
		try {
			const response = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleapiKey}`
			);
			setCityName(response.data.results[0].address_components[2].long_name); //reverse geocoding the latlong
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (longitude && latitude) reverseGeo();
	}, [latitude, longitude]);
	return (
		<>
			<div>
				<h2 className="cityNameDiv">{cityName}</h2>
			</div>
		</>
	);
};

export default ReverseGeo;
