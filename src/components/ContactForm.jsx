import React from "react";

const ContactForm = () => {
	return (
		<>
			<div class="contact-us">
				<form action="#">
					<label for="customerName">
						Name <em>*</em>
					</label>
					<input
						id="customerName"
						name="customerName"
						required=""
						type="text"
					/>
					<label for="customerEmail">
						Email <em>*</em>
					</label>
					<input
						id="customerEmail"
						name="customerEmail"
						required=""
						type="email"
					/>
					<label for="customerPhone">Phone</label>
					<input id="customerPhone" name="customerPhone" type="tel" />
					<label for="bookingRef">Booking Ref</label>
					<input id="bookingRef" name="bookingRef" type="text" />
					<label for="customerNote">
						Your Message <em>*</em>
					</label>
					<textarea
						id="customerNote"
						name="customerNote"
						required=""
						rows="4"
					></textarea>
					<button>Submit</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
