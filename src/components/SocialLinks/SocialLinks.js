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
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-linkedin-in"></i>'}} href="https://www.linkedin.com/company/the-buckeye-ranch/" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-facebook-f"></i>'}} href="https://www.facebook.com/buckeyeranch" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-twitter"></i>'}} href="https://twitter.com/thebuckeyeranch" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-instagram"></i>'}} href="https://www.instagram.com/thebuckeyeranch/" target="_blank" />
			</li>
			<li>
				<a dangerouslySetInnerHTML={{__html: '<i class="fab fa-youtube"></i>'}} href="https://www.youtube.com/channel/UCP6CkY78b1oJh0PSEAVFWYg" target="_blank" />
			</li>
		</ul>
	)
}
  
export default SocialLinks