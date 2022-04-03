import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "../../css/mailer.css";
import "../../css/reset.css";

export const Mailer = () => {
	const YOUR_SERVICE_ID = "service_qmsnsbh";
	const YOUR_TEMPLATE_ID = "template_xyd2rzu";
	const YOUR_USER_ID = "TAUpqMWXv8N-Rc6_b";
	const form = useRef();

	const eventData = {
		userName: "John Sinha",
		meetTime: "30 min",
		dataAndTime: "10:00am - 10:30am, Thursday, May 12, 2022",
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="container-event">
			<div className="event-info">
				<Link to="/">
					<img
						width="10%"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9JgHaFXgRxsnUpl6ijUrsb0lGfwcjqGQwQ&usqp=CAU"
						alt=""
					/>
				</Link>
				<h4 className="userName">{eventData.userName}</h4>
				<h3 className="meet">Meet</h3>

				<div style={{ display: "flex", marginTop: "15px" }}>
					<img
						width="6%"
						src="https://icones.pro/wp-content/uploads/2021/03/icone-d-horloge-gris.png"
						alt=""
					/>
					<h3 className="event-time">{eventData.meetTime}</h3>
				</div>
				<div style={{ display: "flex", marginTop: "15px" }}>
					<img
						width="6%"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FVtd6mnMbwMoN2APUvCfWX4IrxUZjihNpA&usqp=CAU"
						alt=""
					/>
					<h3 className="web-confirm-time">
						Web conferencing details provided upon confirmation.
					</h3>
				</div>
				<div style={{ display: "flex", marginTop: "15px" }}>
					<img
						width="6%"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DNkHGxBON6m8Gl1vbr8gXB_XseQ9WCZGag&usqp=CAU"
						alt=""
					/>
					<h3 className="web-confirm-time">{eventData.dataAndTime}</h3>
				</div>
				<div style={{ display: "flex", marginTop: "15px" }}>
					<img
						width="5.5%"
						src="https://icon-library.com/images/website-icon-png-black/website-icon-png-black-24.jpg"
						alt=""
					/>
					<h3 className="web-confirm-time">India Standard Time</h3>
				</div>
			</div>

			<div className="form-div">
				<form ref={form} onSubmit={sendEmail}>
					<h3 className="enter-details">Enter Details</h3>

					<label className="label-name">Name</label>
					<br />
					<input type="text" name="name" className="form-input" />
					<br />

					<label className="label-name">Email</label>
					<br />

					<input type="email" name="email" className="form-input" />
					<br />

					<label className="label-name">
						Please share anything that will help prepare for our meeting.
					</label>
					<br />

					<textarea name="message" className="form-input" />
					<br />

					<input type="submit" value="Schedule Event" className="form-submit" />
				</form>
			</div>
		</div>
	);
};
