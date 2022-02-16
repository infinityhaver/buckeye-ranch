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
						<div className="footer-nav">
							<ul>
								<li>
									<a href="#!">
										Email Sign-Up
									</a>
								</li>
								<li>
									<a href="#!">
										The Buckeye Ranch Holiday Programs
									</a>
								</li>
								<li>
									<a href="#!">
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
						<SocialLinks />
					</div>
				</div>
			</div>
		</footer>
	)
}
  
export default Footer