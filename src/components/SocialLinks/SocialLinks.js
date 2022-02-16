import React from "react";
import fontawesome from "@fortawesome/fontawesome";
import faSolid from "@fortawesome/fontawesome-free-solid";
import faBrands from "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome/styles.css";
import "./SocialLinks.scss";

const SocialLinks = () => {

	return (
		<ul className="social-links">
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-linkedin-in"></i><span>Buckeye Ranch LinkedIn</span>'}} href="https://www.linkedin.com/company/the-buckeye-ranch/" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-facebook-f"></i><span>Buckeye Ranch Facebook</span>'}} href="https://www.facebook.com/buckeyeranch" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-twitter"></i><span>Buckeye Ranch Twitter</span>'}} href="https://twitter.com/thebuckeyeranch" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-instagram"></i><span>Buckeye Ranch Instagram</span>'}} href="https://www.instagram.com/thebuckeyeranch/" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-youtube"></i><span>Buckeye Ranch YouTube</span>'}} href="https://www.youtube.com/channel/UCP6CkY78b1oJh0PSEAVFWYg" target="_blank" />
			</li>
		</ul>
	)
}
  
export default SocialLinks