import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
	return (
		<>
			<form>
				<h1>Get in touch!</h1>
				<div className="formGroup">
					<p>
						First Name<span>*</span>
					</p>
					<span className="icon">
						<FontAwesomeIcon className="faMale" icon={faMale} />
					</span>
					<input type="text" name="firstName" />
				</div>

				<div className="formGroup">
					<p>
						Last Name<span>*</span>
					</p>
					<span className="icon">
						<FontAwesomeIcon className="faMale" icon={faMale} />
					</span>
					<input type="text" name="lastName" />
				</div>
				<div className="formGroup">
					<p>Phone</p>
					<span className="icon">
						<FontAwesomeIcon className="faMale" icon={faMale} />
					</span>
					<input type="tel" name="tel" />
				</div>
				<div className="formGroup">
					<p>Email</p>
					<span className="icon">
						<FontAwesomeIcon className="faMale" icon={faMale} />
					</span>
					<input type="email" name="email" />
				</div>
				<div className="formGroup">
					<p>Your Message</p>
					<span className="icon">
						<FontAwesomeIcon className="faMale" icon={faMale} />
					</span>
					<textarea
						id="customerMessage"
						name="customerMessage"
						required=""
						rows="3"
					></textarea>
				</div>
				<div>
					<button type="submit" className="buttonContact">
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
