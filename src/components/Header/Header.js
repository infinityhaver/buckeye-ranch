import React from "react";
import logo from "../../images/logo.webp";
import "./Header.scss";

const Header = () => {

	return (
		<header id="site-header" className="site-header">
			<a href="/">
				<img src={logo} alt="The Buckeye Ranch" />
			</a>
		</header>
	)
}
  
export default Header