import React from "react";
import Joi from "joi";

//******NOT CURRENTLY IN USE******//

const userVerification = () => {
	const signInSchema = Joi.object().keys({
		firstName: Joi.string().min(3).max(15).required(),
		lastName: Joi.string().min(2).max(20).required(),
		email: Joi.string().email().required(),
		bookingRef: Joi.string().min(8).max(15).required,
	});

	return <></>;
};

export default userVerification;
