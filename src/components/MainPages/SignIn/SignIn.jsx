import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Constants from "../Utils/Constants";

const SignIn = (props) => {
	const [email, setEmail] = useState("alice@gmail.com");
	const [firstName, setFirstName] = useState("Alice");
	const [lastName, setLastName] = useState("Britton");
	const [bookingRef, setBookingRef] = useState("TBT-1234567");
	const [loginError, setLoginError] = useState(false);

	const signInAPI = async () => {
		if (
			firstName.length === 0 ||
			lastName.length === 0 ||
			email.length === 0 ||
			bookingRef.length === 0
		) {
			setLoginError(true); //defensive check
		}
		try {
			const response = await axios.post(Constants.SIGNINURL, {
				first_name: firstName,
				last_name: lastName,
				email: email,
				booking_ref: bookingRef,
			});

			localStorage.setItem("first_name", response.data.first_name);
			localStorage.setItem("token", response.data.token);
			if (response.data.loginSuccessful) {
				props.setPage(2);
			} else {
				setLoginError(true);
			}
		} catch (error) {
			console.log(error);
			//could send to error404 with props here
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="signIn">
				<h1>Sign in to view your booking</h1>
				<p className="signInP">
					Booking details can be found on your confirmation email
				</p>
				<p>First Name</p>
				<input
					id="firstName"
					value={firstName}
					type="text"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<p>Last Name</p>
				<input
					id="lastName"
					value={lastName}
					type="text"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<p>Booking Reference</p>
				<input
					id="bookingRef"
					value={bookingRef}
					type="text"
					placeholder="TBT-"
					onChange={(e) => setBookingRef(e.target.value)}
				/>
				<p>Email</p>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button
				className="signInButton"
				onClick={() => signInAPI()}
				type="submit"
			>
				View My Booking
			</button>
			{loginError && <h2>Oops. Please check your details and try again.</h2>}
			<div>
				<button
					className="signInProblem"
					onClick={() => {
						props.setPage(0);
					}}
				>
					Problems Signing In?
				</button>
			</div>
		</>
	);
};

export default SignIn;
