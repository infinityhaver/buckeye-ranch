import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./Header.scss";

const Header = () => {

	return (
		<header id="site-header" className="site-header">
			<a href="/">
				<StaticImage
					src="../../images/logo.png"
					alt="The Buckeye Ranch Logo"
					placeholder="none"
					layout="fixed"
					width={264}
					height={56.02}
				/>
			</a>
		</header>
	)
}
  
export default Header