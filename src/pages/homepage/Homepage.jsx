import styles from "./Homepage.module.css";

// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";



import HeroSection from "../../components/hero-section/HeroSection";
import NewsSection from "../../components/news-section/NewsSection";
import ExperiencesSection from "../../components/experience-section/ExperiencesSection";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/footer";
function Homepage() {

  return (
		<main className={styles.homepage}>
			<NavBar />
			<HeroSection />
			<NewsSection />
			<ExperiencesSection />
			<Footer />
		</main>
	);
}

export default Homepage;