import React from "react";
import Slider from "react-slick";
import slideImage1 from "../../images/TBR_60th.webp";
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
									src="../../images/TBR_60th.webp"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/TBR_60th.webp"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/TBR_60th.webp"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/TBR_60th.webp"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/TBR_60th.webp"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/TBR_60th.webp"
									alt="Logo"
									placeholder="none"
									layout="full_width"
								/>
							</div>
							<div className="slide" aria-hidden="true">
								<StaticImage
									src="../../images/TBR_60th.webp"
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