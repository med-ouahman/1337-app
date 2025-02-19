import styles from "./Homepage.module.css";

// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";

import HeroSection from "../../components/hero-section/HeroSection";
import NewsSection from "../../components/news-section/NewsSection";
import Footer from "../../components/footer/footer";
import ExperiencesSection from "../../components/experience-section/ExperiencesSection";

function Homepage() {

  return (
		<main className={styles.homepage}>
			<HeroSection />
			<NewsSection />
			<ExperiencesSection />
			<Footer></Footer>
		</main>
	);
}

export default Homepage;