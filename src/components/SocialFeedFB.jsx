import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const SocialFeedFB = () => {
	return (
		<>
			<h2>#FollowTheAdventure</h2>
			<InstagramFeed
				token="IGQVJXR25tYllkTkFFRXg1MDJCQk1IRlZAmU0otcnJySk4waTBTYy1pLXRmUC1pUDRuOTFjVXdWZAW04ejMxdnc2R0pqQzBJUmpjblJyNmdqaG9TbEVvYmExeGRRT1pjTFM1Skt3Mlg1dC12QjNEcElOawZDZD"
				counter="6"
			/>
		</>
	);
};

export default SocialFeedFB;
