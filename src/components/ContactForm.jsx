import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMale,
	faPhone,
	faAt,
	faComments,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ContactForm = () => {
	//collect data from the form
	const [submitted, setSubmitted] = useState(false);
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		tel: "",
		customerMessage: "",
	});

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	// const resetForm = () => {
	// 	setData({
	// 		firstName: "",
	// 		lastName: "",
	// 		email: "",
	// 		tel: "",
	// 		customerMessage: "",
	// 	});
	// };

	const onSubmit = async (e) => {
		e.preventDefault();
		const result = await axios.post(
			"https://api.timbertours.co.uk/contact",
			data
		);
		console.log(result);

		if (result.data.success) {
			setSubmitted(true);
		}
	};

	if (submitted) {
		return (
			<div>
				<p>
					Thank you for your message, a member of our team will be in touch
					shortly.
				</p>
				<p>
					In the meantime, keep up to date and follow us on our social media
					platforms below
				</p>
			</div>
		);
	}

	return (
		<>
			<form id="contactForm">
				<h2>Send us a Message</h2>
				<div className="formGroup">
					<label for="firstName">
						First Name<span>*</span>
					</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faMale" icon={faMale} />
						</span>
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={data.firstName}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="formGroup">
					<label for="lastName">
						Last Name<span>*</span>
					</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faMale" icon={faMale} />
						</span>
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={data.lastName}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="formGroup">
					<label for="phone">Phone</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faPhone" icon={faPhone} />
						</span>
						<input
							type="tel"
							name="tel"
							id="tel"
							value={data.tel}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="formGroup">
					<label for="email">Email</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faAt" icon={faAt} />
						</span>
						<input
							type="email"
							name="email"
							id="email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="formGroup">
					<label for="message">Your Message</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faComments" icon={faComments} />
						</span>
						<textarea
							id="customerMessage"
							className="customerMessage"
							name="customerMessage"
							required=""
							rows="3"
							value={data.message}
							onChange={handleChange}
						></textarea>
					</div>
				</div>
				<div>
					<button
						//type="submit"
						className="buttonContact"
						onClick={onSubmit}
					>
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
