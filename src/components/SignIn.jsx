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
				<p>
					Please use the details you provided when booking your tour. Unsure?
					Check your confirmation email.
				</p>
				<p>First Name</p>
				<input
					onSubmit={onSubmit}
					id="name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<p>Last Name</p>
				<input
					onSubmit={onSubmit}
					id="name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<p>Booking Reference</p>
				<input
					onSubmit={onSubmit}
					id="bookingRef"
					type="text"
					placeholder="TBT-"
					onChange={(e) => setBookingRef(e.target.value)}
				/>
				<p>Email</p>
				<input
					onSubmit={onSubmit}
					id="email"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p>
					I agree to the{" "}
					<a href="https://www.timberbush-tours.co.uk/terms-conditions">
						Terms
					</a>{" "}
					<input type="checkbox" />
				</p>
			</div>
			<button type="submit" disabled={!userValidation()}>
				View My Booking
			</button>
		</>
	);
};

export default SignIn;
