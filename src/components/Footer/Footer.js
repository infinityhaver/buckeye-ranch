import React from "react";
import SocialLinks from "../SocialLinks";
import "./Footer.scss";

const Footer = () => {

	return (
		<footer id="site-footer" className="site-footer">
			<div className="container">
				<div className="row">
					<div className="copyright-social">
						<div className="copyright">
							© Buckeye Ranch 2022. All Rights Reserved.
						</div>
						<SocialLinks />
					</div>
				</div>
			</div>
		</footer>
	)
}
  
export default Footer