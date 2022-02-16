import React from "react";
import circle from "../../images/circle.webp";
import "./ImageBackgroundContent.scss";

const ImageBackgroundContent = () => {
	return (
		<div className="bg-wrap" style={{ background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${circle})`}}>
			<div className="container">
				<div className="row">
					<div className="headline-content-wrap">
						<div className="headline">
							<h1>
								Buckeye Ranch Mission
							</h1>
						</div>
						<div className="headline-content">
							<p>
								The Buckeye Ranch opened as a treatment center for 10 young men and has now transitioned into one of the country’s leading providers of emotional, behavioral, and mental health services for children and families. Each day, more than 2,350 youth are in Ranch care, receiving services designed to help them become successful within their families, schools, and communities.   
							</p>
							<p>
								Today, The Buckeye Ranch operates from six different locations to better serve clients in Central and Southwestern Ohio. We pride ourselves on offering specialized programming designed to meet the needs of our clients and their families. Our staff of dedicated Ranch professionals is committed to helping each youth and family achieve their goals. 
							</p>
						</div>
					</div>
					<div className="narrow-content">
						<h4>
							Creating healthy children and youth, strong families, and flourishing communities.
						</h4>
					</div>
					<div className="cta">
						<h3>
							Questions or interested in sponsoring?
						</h3>
						<p>
							Contact Jessica Brown at <a href="mailto:jabrown@buckeyeranch.org" target="_blank">jabrown@buckeyeranch.org</a> or <a href="tel:6146346828" target="_blank">(614) 634-6828</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImageBackgroundContent