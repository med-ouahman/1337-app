
import { NavLink } from "react-router";
import styles from "./NewsSection.module.css";

function NewsItem() {
	
  return (
			<div className={styles.newsItem}>
				<div className={styles.img}>
				<img src="/public/Gb-aX9cWwAAGRuj.jpg" alt="1337 Rabat" />
				</div>

				<div className={styles.info}>
					<h3>
						1337 has officially announced the opening of a new campus
					</h3>
				
					<NavLink to="/news" className={styles.learnMore}>Learn More</NavLink>
				</div>
			</div>
	);
}


export default NewsItem;