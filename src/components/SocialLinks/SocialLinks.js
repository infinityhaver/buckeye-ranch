import React from "react";
import fontawesome from "@fortawesome/fontawesome";
import faBrands from "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome/styles.css";
import "./SocialLinks.scss";

const SocialLinks = () => {

	return (
		<ul className="social-links">
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-linkedin-in"></i><span>Buckeye Ranch LinkedIn</span>'}} href="https://www.linkedin.com/company/the-buckeye-ranch/" target="_blank" rel="noreferrer" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-facebook-f"></i><span>Buckeye Ranch Facebook</span>'}} href="https://www.facebook.com/buckeyeranch" target="_blank" rel="noreferrer" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-twitter"></i><span>Buckeye Ranch Twitter</span>'}} href="https://twitter.com/thebuckeyeranch" target="_blank" rel="noreferrer" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-instagram"></i><span>Buckeye Ranch Instagram</span>'}} href="https://www.instagram.com/thebuckeyeranch/" target="_blank" rel="noreferrer" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-vimeo-v"></i><span>Buckeye Ranch Vimeo</span>'}} href="https://vimeo.com/user127328204" target="_blank" rel="noreferrer" />
			</li>
		</ul>
	)
}
  
export default SocialLinks