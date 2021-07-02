import React, { useState } from "react";

const SignIn = (props) => {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [bookingRef, setBookingRef] = useState("");
	// const [firstNameError, setFirstNameError] = useState({});
	// const [lastNameError, setLastNameError] = useState({});
	// const [emailError, setEmailError] = useState({});
	// const [bookingRefError, setBookingRefError] = useState({});

	function userValidation() {
		return (
			email.length > 0 &&
			firstName.length > 0 &&
			lastName.length > 0 &&
			bookingRef.length > 0
		);
	}
	function onSubmit(e) {
		e.preventDefault();
		// const isValid = userValidation();
	}

	return (
		<>
			<div className="signIn">
				<h1>Sign in to view your booking</h1>
				<p>
					Please use the details you provided when booking your tour. Unsure?
					Check your confirmation email.
				</p>
				<p>First Name</p>
				<input
					onSubmit={onSubmit}
					id="firstName"
					value={firstName}
					type="text"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<p>Last Name</p>
				<input
					onSubmit={onSubmit}
					id="lastName"
					value={lastName}
					type="text"
					onChange={(e) => setLastName(e.target.value)}
				/>
				<p>Booking Reference</p>
				<input
					onSubmit={onSubmit}
					id="bookingRef"
					value={bookingRef}
					type="text"
					placeholder="TBT-"
					onChange={(e) => setBookingRef(e.target.value)}
				/>
				<p>Email</p>
				<input
					onSubmit={onSubmit}
					id="email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button
				className="signInButton"
				onClick={() => props.setPage(2)}
				type="submit"
				disabled={!userValidation()}
			>
				View My Booking
			</button>
			<div>
				<a
					href="https://www.timberbush-tours.co.uk/contact-us"
					className="signInProblem"
				>
					Problems Signing In?
				</a>
			</div>
		</>
	);
};

export default SignIn;
