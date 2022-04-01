import React from 'react';
import './Customers.css';
import CustomersCard from './CustomersCard';

const Customers = () => {
	return (
		<>
			<div className="container" style={{ width: '80%', margin: 'auto' }}>
				<h1>Stories from Calendly customers</h1>
				<div style={{ display: 'flex' }}>
					<CustomersCard image="https://images.ctfassets.net/k0lk9kiuza3o/4kcENR3airKCIkQhISrjfy/8e829160a2d6b7b4192db41be89ce865/avocado.png?w=1920&h=1080&q=50&fm=webp" />
					<CustomersCard image="https://images.ctfassets.net/k0lk9kiuza3o/6ji1PuxfTNsvZRnzrlNfsQ/c25151ab347acadccdd5e42797ed21b7/hackbright-academy.png?w=1920&h=1080&q=50&fm=webp" />
					<CustomersCard image="https://images.ctfassets.net/k0lk9kiuza3o/5JAusKGcZNmQWDvIpEsNLY/d9cfe1c601ac0019aeb267f067b4528a/ancestry-customer.png?w=1920&h=1080&q=50&fm=webp" />
				</div>
			</div>
		</>
	);
};
export default Customers;
