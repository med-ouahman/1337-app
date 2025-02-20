
import { NavLink } from "react-router";
import styles from "./NewsSection.module.css";

function NewsItem({ img, headline, id }) {
	
  return (
			<div className={styles.newsItem}>
				<div className={styles.img}>
				<img src={img} alt="1337 Rabat" />
				</div>

				<div className={styles.info}>
					<h3>
						{headline}
					</h3>
				
					<NavLink to={`/news#${id}`} className={styles.learnMore}>Learn More</NavLink>
				</div>
			</div>
	);
}


export default NewsItem;