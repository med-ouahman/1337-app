
import styles from "./ExperiencesSection.module.css"

import { NavLink } from "react-router-dom";

function ExperienceItem({ img, fullName, id, journy}) {
	return (
		<div className={styles.experienceItem} id={id}>
			<div className={styles.profile}>
				<img src={img} alt="Profile img" />
				<p>{fullName}</p>
			</div>
			<p>
				{journy[0].slice(0, 240)}
			</p>
			<NavLink to={`/experiences#${id}`} >
				See Full Story
			</NavLink>
		</div>
	);
}


export default ExperienceItem;