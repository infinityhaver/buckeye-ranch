import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponsors.scss";

const Sponsors = () => {

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: false,
					slidesToShow: 2
				}
			}
		]
	};

	return (
		<div className="purple-bg">
			<div className="container">
				<div className="row">
					<div className="sponsors-wrap">
						<h1>
							Event Sponsors
						</h1>
						<Slider {...settings}>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876186-bailey-cavalieri-llc.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876199-ice-miller-logo_dark_gray_4c-c-2020.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876215-state-bank-and-trust.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876238-zipline-logistics-logo.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876193-encova-logo-color.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881383-kokosing-corna-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876220-state-auto-2color-horiz-updated-4-2016.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/MWAutoGroup_ChevyBuickGMC_HeadlineLogos_Stacked.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876194-fusion-alliance-2020.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876205-leaderpromos-logo-2018-pma-rgb-w_lp-h.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876227-united-health-care.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876196-grange-insurance-09-2020.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876206-ohio-custodial-management-logo.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/US-Bank-Logo-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876197-ice-miller.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876211-pnc-color-logo.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/370876236-wesbanco-color-logo-vector.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881356-cameron-mitchell-groupplain-1-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881366-delta-dental-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881377-kemba-logo_full-01-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/cbiz-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881361-cardinal-logo-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881374-g_j-logos-02-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/sponsor-logos/372881386-rosati-logo-White.png"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}
  
export default Sponsors