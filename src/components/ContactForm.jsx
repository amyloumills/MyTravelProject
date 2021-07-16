import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMale,
	faPhone,
	faAt,
	faComments,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
	return (
		<>
			<form>
				<h2>Send us a Message</h2>
				<div className="formGroup">
					<label for="firstName">
						First Name<span>*</span>
					</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faMale" icon={faMale} />
						</span>
						<input type="text" name="firstName" />
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
						<input type="text" name="lastName" />
					</div>
				</div>
				<div className="formGroup">
					<label for="phone">Phone</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faPhone" icon={faPhone} />
						</span>
						<input type="tel" name="tel" />
					</div>
				</div>
				<div className="formGroup">
					<label for="email">Email</label>
					<div className="contactInput">
						<span className="formIcon">
							<FontAwesomeIcon className="faAt" icon={faAt} />
						</span>
						<input type="email" name="email" />
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
							name="customerMessage"
							required=""
							rows="3"
						></textarea>
					</div>
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
