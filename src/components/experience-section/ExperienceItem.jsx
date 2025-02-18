import { NavLink } from "react-router";
import styles from "./ExperiencesSection.module.css"


function ExperienceItem() {

	return (
		<div className={styles.experienceItem}>
			<div className={styles.profile}>
				<img src="/public/cat-5579221.jpg" alt="Profile img" />
				<p>Larry The Cat</p>
			</div>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni repellendus maiores voluptate numquam ut tempore sequi? Unde voluptatem aliquid saepe laudantium adipisci. Iure fugit, molestiae velit consequatur eos nam corporis.
			</p>
			<NavLink to="/experiences">
				See Full Story
			</NavLink>
		</div>
	);
}


export default ExperienceItem;