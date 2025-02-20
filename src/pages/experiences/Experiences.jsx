import styles from "./Experiences.module.css";
import StudentExperience from "./StudentExperience";
import { useGlobalContext } from "../../contexts/GlobalContext";


import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/footer";

function Experiences() {

	const { experiences } = useGlobalContext();

	return (
		<>
		<NavBar />
		<main className={styles.experiences}>
			<div className={styles.experienceContainer}>
				{
					experiences.map(exp => <StudentExperience {...exp} key={crypto.randomUUID()} />)
				}
			</div>
		</main>
		<Footer />
		</>
	);
}

export default Experiences;