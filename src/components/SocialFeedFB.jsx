import React, { Component } from "react";
import { FacebookProvider, Page, EmbeddedPost } from "react-facebook";

const SocialFeedFB = () => {
	return (
		<FacebookProvider appId="855434338435342">
			<Page href="https://www.facebook.com" tabs="timeline" />
			<EmbeddedPost href="http://www.facebook.com" width="500" />
		</FacebookProvider>
	); //WAITING FOR APPROVAL FROM FB
};

export default SocialFeedFB;
