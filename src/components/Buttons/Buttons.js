import React from "react";
import { Link } from "gatsby"
import "./Buttons.scss";

const Buttons = () => {

	return (
		<div className="container">
			<div className="row">
				<div className="buttons-wrap">
					<div className="buckeye-button">
						<Link 
							to="#!"
							className="btn solid btn-block"
						>
							Become a Sponsor
						</Link>
					</div>
					<div className="buckeye-button">
						<Link 
							to="#!"
							className="btn solid btn-block"
						>
							Join the Honorary Committee
						</Link>
					</div>
					<div className="buckeye-button">
						<Link 
							to="#!"
							className="btn solid btn-block"
						>
							Community Partner Package
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Buttons