import React from 'react';
import './TeamCSS/CustomersCard.css';
const CustomersCard = (props) => {
	return (
		<>
			<div className="cards">
				<div id="card">
					<img alt="imag" src={props.image} width="24%" />

					<p>
						Avocado used scheduling automation to handle appointment booking for
						their virtual showrooms
					</p>
					<h5>Read Now </h5>
				</div>
			</div>
		</>
	);
};
export default CustomersCard;