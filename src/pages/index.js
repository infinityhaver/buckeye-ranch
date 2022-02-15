import * as React from "react";

import Header from "../components/Header";
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import "../scss/entry.scss";

const IndexPage = () => {
	return (
		<>
			<Header />
			{CountDown()}
			<Footer />
		</>
	)
}

export default IndexPage