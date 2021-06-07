import React, { useState } from "react";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [bookingRef, setBookingRef] = useState("");

	function userValidation() {
		return email.length > 0 && name.length > 0 && bookingRef.length > 0;
	}
	function onSubmit(e) {
		e.preventDefault();
	}
	return (
		<>
			<div className="signIn">
				<h1>Sign in to view your booking</h1>
				Name
				<input
					onSubmit={onSubmit}
					id="name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				Booking Reference
				<input
					onSubmit={onSubmit}
					id="bookingRef"
					type="text"
					onChange={(e) => setBookingRef(e.target.value)}
				/>
				Email
				<input
					onSubmit={onSubmit}
					id="email"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
				I agree to the Terms
				<input type="checkbox" />
			</div>
			<button type="submit" disabled={!userValidation()}>
				View My Booking
			</button>
		</>
	);
};

export default SignIn;
