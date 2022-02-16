import React from "react";
import "./EventVideo.scss";

const EventVideo = () => {

	return (
		<>
			<h2 className="video-heading">
				60 Years of History
			</h2>
			<div className="video-wrap">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/atWLOdfNS_M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</>
	)
}

export default EventVideo