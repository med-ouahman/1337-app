import styles from "./Login.module.css";

import { NavLink } from "react-router-dom";

function Login() {

	return (
		<>
		
			<SupportModal />
			<main className={styles.login}>

			</main>
		</>
	);
}

function SupportModal() {

	return (
		<div className={styles.support}>
			<div className={styles.modal}>
				<h2>Login Not available</h2>
				<p>
					This website doesn't support login functionality for the moment, consider refering to this page in a later time.
					Thank you for your understanding.
				</p>
				<NavLink to="/">Back Home</NavLink>
			</div>
		</div>
	);
}

export default Login;