import * as React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";
import EventVideo from "../components/EventVideo";
import Buttons from "../components/Buttons";
import ImageBackgroundContent from "../components/ImageBackgroundContent";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import "../scss/_home.scss";

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>{'The Buckeye Ranch - Child & Family Mental Health Services - Columbus, OH'}</title>
				<meta name="description" content="Restoring hope and providing healing services for youth, children, and families in Central and Southwestern Ohio - from mental health treatment to foster care."></meta>
				<link rel="shortcut icon" href={favicon}></link>
			</Helmet>
			<Header />
			<Hero />
			<CountDown />
			<div className="event-container">
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
			</div>
			<Buttons />
			<ImageBackgroundContent />
			<Sponsors />
			<Footer />
		</>
	)
}

export default IndexPage