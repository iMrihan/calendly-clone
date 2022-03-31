import React from "react";
import "../../css/main-first-half.css";
import "../../css/main-second-half.css";

import client from "../../utils/client.json";
import usages from "../../utils/usages.json";

export default function Main() {
	return (
		<main className="main">
			{/* <----------------------section-1-------Homepage-Hero-Section-----------------> */}

			<section className="Homepage-Hero">
				<div className="section-first-left-div">
					<h1 className="schedule-heading">
						Easy scheduling <span className="ahead">ahead</span>
					</h1>
					<p className="schedule-para">
						Calendly is your hub for scheduling meetings professionally and
						efficiently, eliminating the hassle of back-and-forth emails so you
						can get back to work.
					</p>
					<form className="signUp-form">
						<input
							type="email"
							placeholder="Enter your email"
							className="email"
						/>
						<input type="submit" value="Sign Up" className="signUp" />
						<br />
						<label className="account-cdn">
							Create your free account. No credit card required.
						</label>
					</form>
				</div>
				<div className="section-first-right-div">
					<img width="95%" src="assets/homeImage.svg" alt="" />
				</div>
			</section>

			{/* <----------------------------------section-2---Clients-Section----------------------------------------> */}
			<section className="clients-section">
				<h2 className="client-heading">
					Simplified scheduling for more than
					<span style={{ color: "rgb(0, 107, 255)" }}> 10,000,000</span> users
					worldwide
				</h2>
				<div className="client-img-div">
					{client.companies.map((el, i) => {
						return (
							<img
								width="90px"
								height="40px"
								key={i}
								src={el}
								alt="client-img"
							/>
						);
					})}
				</div>
			</section>

			{/* <------------------------------section-3----Rules Section---------------------------------------> */}

			<section className="rules-section">
				<div className="rules-section-div">
					{usages.map((el, i) => {
						return (
							<div key={el.id} className="rules-div">
								<div className="rules-number">{el.id}</div>
								<h2 className="rules-title">{el.title}</h2>
								<p className="rules-description">{el.description}</p>
							</div>
						);
					})}
				</div>
			</section>

			{/* <----------------------------section-4----------------------------------> */}
			<section className="meeting-section">
				<h2 className="with-out-email-h">
					Schedule meetings without the back-and-forth emails
				</h2>
				<p className="with-out-email-h with-out-email-p">
					Calendly uncomplicates scheduling by only offering times that work
					with your availability across all of your calendars.
				</p>
				<div className="meeting-section-img-div">
					<div>
						<img
							src="https://images.ctfassets.net/k0lk9kiuza3o/6yqxo5oZyfcKFqn25VNniI/9cba7530e7edd0d422f18347c90b941f/Homepage_Gif02_BG_A.svg"
							alt=""
						/>
						<p className="own-meet">Create your custom meeting</p>
					</div>
					<div>
						<img
							src="https://images.ctfassets.net/k0lk9kiuza3o/71A22WqOpSL6muMiJ1cUdJ/a0b9bcfb1500170913bb3784ae6c8e8b/Homepage_Gif03_BG_A.svg"
							alt=""
						/>
						<p className="own-meet">create your work flow</p>
					</div>
				</div>

				<div className="meet-way">
					<div style={{ flex: "45%" }}>
						<h2 className="meet-way-h">Meet the way you want</h2>
						<p className="meet-way-p">
							Open your schedule only to the days and times that work for you.
							When your invitee chooses a meeting slot, it’s instantly
							confirmed.
						</p>
					</div>
					<div style={{ flex: "45%" }}>
						<h2 className="meet-way-h">Calendly coordinates it all</h2>
						<p className="meet-way-p">
							Meetings are scheduled without calendar conflicts, reminders go
							out automatically, and rescheduling is a breeze for everyone.
						</p>
					</div>
				</div>
				<div>
					<button className="teams-use-calendly-btn">
						See how teams use Calendly
					</button>
				</div>
				<div>
					<h1 className="do-more-h">Do more of what you do best</h1>
					<p className="do-more-p ">
						With scheduling hassles and interruptions gone, your day is cleared
						for accomplishment.
					</p>
				</div>
			</section>

			{/* <----------------------------------section-5----------------------------------------------> */}

			<section className="section-work-flow">
				<div style={{ flex: "45%", marginTop: "120px" }}>
					<span className="work-flow">WORKFLOW MANAGEMENT</span>
					<br />
					<h2 className="auto-reminder">Automate reminders and follow-ups</h2>
					<p className="meeting-work-flow">
						Calendly puts your entire meeting workflow on autopilot, sending
						everything from reminder emails to thank you notes, so you can focus
						on the work only you can do. It’s like getting an assistant, even if
						you’re a business of one.
					</p>
				</div>
				<div style={{ flex: "45%", marginTop: "130px" }}>
					<img src="assets/slack-img-calendly.svg" alt="" />
				</div>
			</section>

			{/* <----------------------------------section-6---------------------------------------------------> */}
			<section className=" section-6 section-work-flow">
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<img
						width="80%"
						height=""
						src="https://images.ctfassets.net/k0lk9kiuza3o/1pqBivym1uc4arWjw70fXs/a31901472fed857d39b7b77134ecc279/Homepage_Gif05_BG_A.svg"
						alt=""
					/>
				</div>
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<span className="work-flow">ON-DEMAND SCHEDULING</span>
					<br />
					<h2 className="auto-reminder">
						Make more connections and reduce cancellations
					</h2>
					<p className="meeting-work-flow">
						Prospects can schedule meetings in just a few clicks – whenever the
						moment is right. And cancellations go down because rescheduling is
						easy, fast, and on their terms.
					</p>
				</div>
			</section>

			{/* <----------------------------section-7-----------------------------------> */}
			<section className=" section-7 section-work-flow">
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<span className="work-flow">The courteous approach</span>
					<br />
					<h2 className="auto-reminder">
						Delight invitees with modern scheduling
					</h2>
					<p className="meeting-work-flow">
						Time is a precious commodity. Calendly is the courteous way to book
						meetings and other appointments, because scheduling with just a few
						clicks makes the most of everyone's time.
					</p>
				</div>
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<img
						width="80%"
						height=""
						src="https://images.ctfassets.net/k0lk9kiuza3o/7vNKHYIm5uHYXjdJfmXotL/11bff5c0ef6983e656d627a1846613bb/Homepage_Gif06_BGa.jpg?w=1080"
						alt=""
					/>
				</div>
			</section>

			{/* <---------------------------section-8---------------------------------------> */}

			<section className=" section-8 section-work-flow">
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<img
						width="80%"
						height=""
						src="https://images.ctfassets.net/k0lk9kiuza3o/csrPGy0rtsu1NV2ID5zXb/b87e658795f798923c981e0c9b33da42/Bitly.jpg?w=786&h=786&fl=progressive&q=50&fm=jpg"
						alt=""
					/>
				</div>
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<span className="work-flow">BITLY</span>
					<br />
					<h2 className="auto-reminder">
						"Not only do the SDRs come in with a whole calendar of prospects to
						speak with, they have more prospects show up to their meetings."
					</h2>
					<p
						style={{ color: "blue", fontWeight: "bold" }}
						className="meeting-work-flow">
						Dave Rotholz
					</p>
				</div>
			</section>

			{/* <----------------------------------section-9---------------------------------------------> */}

			<section className=" section-9 section-work-flow">
				<div style={{ flex: "45%", marginTop: "100px" }}>
					<h2
						style={{
							color: "black",
							maxWidth: "50%",
							fontWeight: "bold",
							lineHeight: "1.33333",
							fontWeight: "900",
							fontSize: "60px",
						}}
						className="auto-reminder">
						Try Calendly free
					</h2>
					<p
						style={{
							color: "black",
							maxWidth: "50%",
							fontWeight: "bold",
							lineHeight: "1.33333",
							fontWeight: "900",
							fontSize: "25px",
							marginBottom: "100px",
						}}
						className="meeting-work-flow">
						After your 14-day trial of our Teams plan, enjoy the Free version of
						Calendly – forever.
						<br></br>
						<span
							style={{
								fontSize: "17px",
								marginTop: "30px",
								fontWeight: "normal",
							}}>
							To inquire about our Enterprise plans
						</span>
					</p>
				</div>
			</section>
			<div className="bottom-div"></div>
		</main>
	);
}
