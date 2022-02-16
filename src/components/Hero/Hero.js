import React from "react";
import positiveNote from "../../images/a-positive-note-geo.webp";
import nationwide from "../../images/nationwide.webp";
import "./Hero.scss";

const Hero = () => {

	return (
		<div className="container">
			<div className="row">
				<div className="hero-wrap">
					<div className="hero-left">
						<img src={positiveNote} alt="A Positive Note" />
					</div>
					<div className="hero-right">
						<h4 className="hero-top">
							A Positive Note
						</h4>
						<h1>
							Event Details
						</h1>
						<div className="hero-content">
							<p>
								Join us for this celebration of The Buckeye Ranch's 60th anniversary where we will lift up the powerful stories of our children, youth, and families. Their stories will be coupled with musical acts to honor these lived experiences and share the impact of this critical work with our community. 
							</p>
							<p>
								<b><i>Out of respect for those in recovery or with histories of substance use, please note that alcohol will be served.</i></b>
							</p>
						</div>
						<div className="nationwide">
							<h5>
								Presented BY:
							</h5>
							<img src={nationwide} alt="Nationwide" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
  
export default Hero