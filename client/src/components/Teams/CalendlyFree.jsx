import React from 'react';
import './TeamCSS/CalendlyFree.css';
const CalendlyFree = () => {
	return (
		<>
			<div className="box" style={{ backgroundColor: '#f8f8f8' }}>
				<div className="info">
					<h1 style={{ fontWeight: '900', fontSize: '300%' }}>
						Try Calendly for Free
					</h1>
					<p
						style={{
							lineHeight: '2.1',
							width: '60%',
							fontSize: '24px',
							margin: 'auto',
						}}
					>
						After your 14-day trial of our Teams plan, enjoy the Free version of
						Calendly – forever.
					</p>
					<button
						style={{
							backgroundColor: '#006BFF',
							color: 'white',
							padding: '1.2% 2.5%',
							margin: 'auto',
							borderRadius: '80px',
							margin: '4% 0px 8% 0px',
							fontSize: '15px',
						}}
					>
						Start For Free
					</button>
				</div>
			</div>
		</>
	);
};
export default CalendlyFree;