import React from "react";
import "./EventDetails.scss";

const EventDetails = () => {

	return (
		<div className="event-details">
			<div className="event-detail">
				<h1>
					Time
				</h1>
				<h2>
					6:30 PM
				</h2>
			</div>
			<div className="event-detail">
				<h1>
					Date
				</h1>
				<h2>
					May 5th, 2022
				</h2>
			</div>
			<div className="event-detail">
				<h1>
					Location
				</h1>
				<h2>
					KEMBA Live!
				</h2>
				<p>
					405 Neil Avenue, Columbus, OH 43215
				</p>
			</div>

			<div className="event-detail">
				<h1>
					Time
				</h1>
				<h2>
					To Be Determined
				</h2>
			</div>
			<div className="event-detail">
				<h1>
					Ticket Cost
				</h1>
				<h2>
					$150 Per Person
				</h2>
			</div>
			<div className="event-detail">
				<h1>
					Performing
				</h1>
				<h2>
					MoJoFlo
				</h2>
				<p>
					Catering by <span className="big">Cameron Mitchell</span>
				</p>
			</div>
			<div className="event-detail">
				<h1>
					Attendance
				</h1>
				<h2>
					300+ staff, investors, community members
				</h2>
			</div>
		</div>
	)
}
  
export default EventDetails