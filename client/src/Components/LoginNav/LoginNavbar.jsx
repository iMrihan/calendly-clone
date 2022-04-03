import React from 'react';
import styles from './LoginNavbar.module.css';
const LoginNavbar = () => {
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
							<li>Home</li>
							<li>Availability</li>
							<li>Integrations</li>
							<li>Help</li>
							<li>Account</li>
						</ul>
					</div>
				</div>

				<div className={styles.navbar2}>
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
				</div>
			</div>
		</>
	);
};
export default LoginNavbar;
