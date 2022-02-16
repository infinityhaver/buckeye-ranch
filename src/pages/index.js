import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";
import EventVideo from "../components/EventVideo";
import Buttons from "../components/Buttons";
import ImageBackgroundContent from "../components/ImageBackgroundContent";
import Footer from "../components/Footer";
import "../scss/_home.scss";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>{'The Buckeye Ranch - Child & Family Mental Health Services - Columbus, OH'}</title>
			</Helmet>
			<Header />
			<Hero />
			<CountDown />
			<div className="container">
				<div className="row">
					<div className="event-info-wrap">
						<div className="event-info">
							<EventDetails />
						</div>
						<div className="form-video-wrap">
							<EventForm />
							<EventVideo />
						</div>
					</div>
				</div>
			</div>
			<Buttons />
			<ImageBackgroundContent />
			<Footer />
		</>
	)
}

export default IndexPage