import React from "react";
import Video from "../Video";
import "./EventVideo.scss";

const EventVideo = () => {

	return (
		<div className="buckeye-video">
			<h2 className="video-heading">
				60 Years of History
			</h2>
			<Video
				videoSrcURL="https://player.vimeo.com/video/653040347?h=b14312837a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
				videoTitle="60th Anniversary Teaser"
			/>
		</div>
	)
}

export default EventVideo