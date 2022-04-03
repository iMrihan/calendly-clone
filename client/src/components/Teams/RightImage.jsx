import React from 'react';
const RightImage = (props) => {
	console.log('props:', props);

	return (
		<>
			<div
				className="leftImageBoxContainer"
				style={{
					display: 'flex',
					width: '80%',
					margin: 'auto',
					paddingTop: '50px',
					paddingBottom: '50px',
				}}
			>
				<div
					className="rightTextBox"
					style={{
						paddingLeft: '4%',
						width: '50%',
						lineHeight: '2.2',
					}}
				>
					{/* primary color - #006BFF sky blue
                        secondary text color - #1D344B gray
                        p tag text color - #BFC9D2
                 */}
					<p style={{ color: '#006BFF', fontWeight: '600' }}>{props.pTag}</p>
					<h4
						style={{
							fontSize: '200%',
							width: '80%',
							lineHeight: '1.2',
							fontWeight: '800',
							color: '#1D344B',
						}}
					>
						{props.heading}
					</h4>
					<p style={{ color: '#1D344B', marginTop: '2%' }}>{props.desc}</p>
				</div>
				<div className="leftImageBox" style={{ width: '50%' }}>
					<img src={props.imgLink} alt="img" style={{ width: '60%' }} />
				</div>
			</div>
		</>
	);
};

export default RightImage;
