import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CountDown from "../components/CountDown";
import "../scss/entry.scss";

const IndexPage = () => {
	return (
		<>
			{CountDown()}
			<StaticImage
				src="../images/icon.png"
				alt="Derp"
				placeholder="blurred"
				layout="fixed"
				width={200}
				height={200}
			/>
			<a href="https://www.google.com" className="btn ghost">
				This is a button
			</a>
		</>
	)
}

export default IndexPage