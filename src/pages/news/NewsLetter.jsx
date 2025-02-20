import { useState } from "react";
import styles from "./News.module.css";


function NewsLetter() {
	
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail("");
	}

	return (
		<div className={styles.newsLetter}>
			<h3>Subscribe to newsletter</h3>
			<form action="/" onSubmit={handleSubmit}>
				<input
					type="email"
					required
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default NewsLetter;