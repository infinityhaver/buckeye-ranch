import * as React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import "../scss/entry.scss";

const IndexPage = () => {
	return (
		<>
			<Header />
			<Hero />
			{CountDown()}
			<Footer />
		</>
	)
}

export default IndexPage