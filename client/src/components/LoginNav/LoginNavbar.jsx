import React from 'react';
import styles from './LoginNav.module.css';
import {useState} from "react"
import {Navigate,Link} from "react-router-dom"
const LoginNavbar = () => {
	const [check,setCheck] = useState(false);

 const handleClick = () => {
	 localStorage.clear();
     setCheck(true);
	 localStorage.setItem('ref',"true");
 }
 if(check) {
	 return (<Navigate to="/" /> )
 }
//   (check ? return (<Navigate to="/" /> ) : 
	 
	return (
		 
		<>
			<div className={styles.navbarConainer}>
				<div className={styles.navbar}>
					<div className={styles.logo}>
						<img
							width="30%"
							alt="imaegas"
							src="https://assets.calendly.com/packs/media/logo-square-cd364a3c33976d32792a.png"
						/>
					</div>
					<div className={styles.menu}>
						<ul className={styles.menuButtons}>
							<li>
							<Link to="/Home" >Home</Link>
							</li>
							<li>
								<Link to="/avail" >Availability</Link>
							</li>
							<li>Integrations</li>
							<li>Help</li>
							<li>Account</li>
							<li onClick={handleClick}>Logout</li>
						</ul>
					</div>
				</div>

				{/* <div className={styles.navbar2}>
					<div className="hi">
						<div className={styles.textButton}>
							<p>My Calendly</p>
							<div>
								<button className={styles.createButton}> + Create</button>
							</div>
						</div>
					</div>

					<div className={styles.text2}>
						<p>Event Types</p>
						<p>Scheduled Types</p>
						<p>Workflows</p>
					</div>
				</div> */}
			</div>
		</>
	
	);


};
export default LoginNavbar;