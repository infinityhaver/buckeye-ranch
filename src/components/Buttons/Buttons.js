import React from "react";
import { Link } from "gatsby"
import "./Buttons.scss";

const Buttons = () => {

	return (
		<div className="buttons-container">
			<div className="container">
				<div className="row">
					<div className="buttons-wrap">
						<div className="buckeye-button">
							<a className="btn solid btn-block" href="https://host.nxt.blackbaud.com/registration-form/?formId=e0c16b73-e831-41d9-a813-4c542055aa7b&envId=p-Q32elh_Ch0OVnltY6_hWkw" target="_blank">
								Become a Sponsor
							</a>
						</div>
						<div className="buckeye-button">
							<a className="btn solid btn-block" href="https://host.nxt.blackbaud.com/registration-form/?formId=ed32c152-71a8-4c52-a898-de2693c5a310&envId=p-Q32elh_Ch0OVnltY6_hWkw" target="_blank">
								Join the Honorary Committee
							</a>
						</div>
						<div className="buckeye-button">
							<a className="btn solid btn-block" href="https://host.nxt.blackbaud.com/registration-form/?formId=623577b9-5476-4874-a3e4-c287dd93ce10&envId=p-Q32elh_Ch0OVnltY6_hWkw" target="_blank">
								Community Partner Package
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Buttons