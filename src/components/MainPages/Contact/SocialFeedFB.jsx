import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const SocialFeedFB = () => {
	return (
		<>
			<h2 className="instagramH2">#FollowTheAdventure</h2>
			<InstagramFeed
				token="IEAAEuLZBUT7AsBAJQSWkhSYtWiXToQqkDm4BVudP5QV8boIYKOZCNCIUG9QLMhAYZAMzlkG6VaWo2TkMdIyUXThypogLmSX3abKH64zZBUwztBa4jqtrsKNPuQvuuzqcgLY7ussehhSBZAd5TwC53b9EKWLx6SJpjrL2zZCpHJmb1heS7ypR51aEIfl5RSKEwPgMfkRTJphumdoIZAQEpgZCT"
				counter="6"
			/>
		</>
	);
};

export default SocialFeedFB;
