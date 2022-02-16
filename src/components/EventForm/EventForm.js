import React from "react";
import "./EventForm.scss";

const EventForm = () => {
	const renderForm = () => {
		if(typeof document !== 'undefined') {
			return(
				<script>
					{(function(d, s) {
					var js, el = d.getElementsByTagName(s)[0];
					window.BB_REG_FORM_ID = "680c21be-4b06-4940-b25c-0d9a13dc5756";
					window.BB_REG_FORM_ENVIRONMENT_ID = "p-Q32elh_Ch0OVnltY6_hWkw";
					js = d.createElement(s);
					js.src = "https://sky.blackbaudcdn.net/skyuxapps/registration-form/assets/online_registrations_form_loader_v3.14098ce76d7db76c7e1811317e69bc66d7ffa582.js";
					el.parentNode.insertBefore(js, el);
					})(document, "script")}
				</script>
			)
		} else {
			return(
				''
			)
		}
	}
	return (
		<div className="form-wrap">
			<h2>
				Get Your Ticket Today
			</h2>
			<div id="blackbaud-registration-form"></div>
			{renderForm()}
		</div>
	)
}

export default EventForm