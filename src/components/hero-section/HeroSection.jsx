import styles from "./HeroSection.module.css";

function Span({ char }) {

	return (
		<span>
			{char}
		</span>
	);
}

function HeroSection() {

	const txt = "discover 1337";

	return (
		<section className={styles.heroSection}>
			<div className={styles.back}></div>
			<h1>Welcome to 1337++, Your guide for the 1337 school</h1>
			<a href="#news">
				{txt.split('').map(char => char !== ' ' ? <Span char={char} />: <pre> </pre>)}
			</a>
		</section>
	);
}


export default HeroSection;