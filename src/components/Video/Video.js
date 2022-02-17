import React from "react"
const Video = ({ videoSrcURL, videoTitle }) => (
	<div className="video-wrap">
		<iframe
			src={videoSrcURL}
			title={videoTitle}
			allow="autoplay; fullscreen; picture-in-picture"
			frameBorder="0"
			webkitallowfullscreen="true"
			mozallowfullscreen="true"
			allowFullScreen
		/>
	</div>
)
export default Video