import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<div>
			<Navbar />
			<Link to="/mailer">
				<button>Confirm Event</button>
			</Link>
		</div>
	);
}
