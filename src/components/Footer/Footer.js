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
									<a href="https://www.buckeyeranch.org/email-sign-up.html" target="_blank">
										Email Sign-Up
									</a>
								</li>
								<li>
									<a href="https://www.buckeyeranch.org/adopt-a-family/" target="_blank">
										The Buckeye Ranch Holiday Programs
									</a>
								</li>
								<li>
									<a href="https://www.buckeyeranch.org/privacy-policy.html" target="_blank">
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