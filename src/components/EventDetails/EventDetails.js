import React from "react";
import "./EventDetails.scss";

const EventDetails = () => {

	return (
		<div className="event-details">
			<div className="event-detail">
				<h1>
					Time
				</h1>
				<h5>
					To Be Determined
				</h5>
			</div>

			<div className="event-detail">
				<h1>
					Date
				</h1>
				<h5>
					May 5th, 2022
				</h5>
			</div>

			<div className="event-detail">
				<h1>
					Location
				</h1>
				<h5>
					KEMBA Live!
				</h5>
				<p>
					405 Neil Avenue, Columbus, OH 43215
				</p>
			</div>

			<div className="event-detail">
				<h1>
					Time
				</h1>
				<h5>
					To Be Determined
				</h5>
			</div>

			<div className="event-detail">
				<h1>
					Ticket Cost
				</h1>
				<h5>
					$150 / Per Person
				</h5>
			</div>

			<div className="event-detail">
				<h1>
					Performing
				</h1>
				<h5>
					MoJoFlo
				</h5>
				<p>
					Catering by <span className="big">Cameron Mitchel</span>
				</p>
			</div>
			
			<div className="event-detail">
				<h1>
					Attendance
				</h1>
				<h5>
					300+ staff, investors, community members
				</h5>
			</div>
		</div>
	)
}
  
export default EventDetails