import React, { useEffect, useState } from 'react';
import './CountDown.scss';

function CountDown() {
	const calculateTimeLeft = () => {

		// Set the countdown target date right here
		let countDownDate = '2023-02-15';

		const difference = +new Date(`${countDownDate}`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		const classes = `${interval} countdown-unit`

		timerComponents.push(
			<div className={classes}>
				<div className="number">
					{timeLeft[interval]}
				</div>
				<div className="interval">
					{interval}{" "}
				</div>
			</div>
		);
	});
	return (
		<div className="countdown-wrap">
			{timerComponents.length ? timerComponents : <span>Time's up!</span>}
		</div>
	);
}

export default CountDown;