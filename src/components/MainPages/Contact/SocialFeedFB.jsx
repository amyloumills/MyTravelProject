import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const SocialFeedFB = () => {
	return (
		<>
			<h2 className="instagramH2">#FollowTheAdventure</h2>
			<InstagramFeed token="" counter="6" />
		</>
	);
};
//*******THIS COMPONENT IS CURRENTLY NOT WORKING. LOOKING FOR A FIX******//
export default SocialFeedFB;
