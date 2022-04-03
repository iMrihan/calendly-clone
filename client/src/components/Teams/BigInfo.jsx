import React from 'react';
import './TeamCSS/BigInfo.css';
const BigInfo = () => {
	return (
		<>
			<div
				className="BigInfo"
				style={{
					display: 'flex',
					width: '90%',
					margin: '2rem 2rem 0rem 1rem',
					padding: "4rem 3rem",
					marginTop:"5rem"
				}}
			>
				<div style={{ width: '50%' }}>
					<h1
						style={{
							color: '#006BFF',
							fontSize: '38px',
							fontWeight: '800',
							marginBottom: '2rem',
							marginLeft: '0%',
							textAlign: 'left',
							width: "60%"
						}}
					>
						Power up <span style={{ color:"black"}}>your teams</span>
					</h1>
					<p
						style={{
							fontSize: '16px',							
						}}
					>
						Calendly gives you control over team scheduling with a standardized,
						scalable process. It’s secure, easy to manage, and integrates with
						your team's favorite tools, so you can get everyone working as
						efficiently and effectively as possible.
					</p>
					<div
						style={{
							display: 'flex',
							gap: '3%',
							paddingTop: '7%',
							paddingBottom: '5%',
						}}
					>
						<button
							style={{
								backgroundColor: '#006BFF',
								color: 'white',
								padding: '3.2% 7%',
								borderRadius: '80px',
		
								fontSize: '15px',
							}}
						>
							Start For Free
						</button>
						<button
							style={{
								backgroundColor: 'white',
								color: 'black',
								fontFamily: 'Roboto',
								padding: '3.2% 7%',
								borderRadius: '80px',
								fontSize: '15px',
							}}
						>
							Contact Sales
						</button>
					</div>
				</div>
				<div style={{ width: '50%', margin: "0rem 3rem" }}>
					<img
						width="100%"
						alt="img"
						src="https://images.ctfassets.net/k0lk9kiuza3o/10RUnrGVSw0xNsRmHqBQ5u/92bd564ccd183adf729a257d54574ab6/Calendly-Teams-Hero.png?w=1504&h=1219&q=50&fm=webp"
					/>
				</div>
			</div>
		</>
	);
};
export default BigInfo;