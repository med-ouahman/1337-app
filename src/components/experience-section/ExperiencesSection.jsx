import ExperienceItem from "./ExperienceItem";
import styles from "./ExperiencesSection.module.css";


function ExperiencesSection() {
  
	return (
		<section className={styles.experiencesSection}>
			<h2>Discover 1337 Alumnis Experiences</h2>
			<div className={styles.experienceContainer}>
				<ExperienceItem />
				<ExperienceItem />
				<ExperienceItem />
				<ExperienceItem />
			</div>
		</section>
	);
}


export default ExperiencesSection;