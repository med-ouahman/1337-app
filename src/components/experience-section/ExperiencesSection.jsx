import { useGlobalContext } from "../../contexts/GlobalContext";
import ExperienceItem from "./ExperienceItem";
import styles from "./ExperiencesSection.module.css";



function ExperiencesSection() {
  
	const { experiences } = useGlobalContext();
	const limited = experiences.filter((_, index) => index < 5);
	
	return (
		<section className={styles.experiencesSection}>
			<h2>Discover 1337 Alumnis Experiences</h2>
			<div className={styles.experienceContainer}>
				{limited.map(item => <ExperienceItem {...item} key={crypto.randomUUID()} />)}
			</div>
		</section>
	);
}


export default ExperiencesSection;