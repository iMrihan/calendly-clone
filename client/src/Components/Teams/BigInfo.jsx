import React from 'react';
import './BigInfo.css';
const BigInfo = () => {
	return (
		<>
			<div
				className="BigInfo"
				style={{
					display: 'flex',
					width: '75%',
					margin: 'auto',
					padding: '3% 0.1% 2.5% 0.1%',
				}}
			>
				<div style={{ width: '45%' }}>
					<h1
						style={{
							color: '#006BFF',
							fontSize: '320%',
							width: '75%',
							fontWeight: '800',
							marginBottom: '12%',
							marginLeft: '0%',
							textAlign: 'left',
						}}
					>
						Power up your teams
					</h1>
					<p
						style={{
							lineHeight: '1.8',
							fontSize: '26px',
							width: '87%',
							fontFamily: 'Roboto',
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
								fontFamily: 'Roboto',
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
				<div style={{ width: '60%' }}>
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
