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
        <>
        <section className={styles.heroSection}>
            <div className={styles.back}></div>
            <h1 className={styles.type}>
                <span className={styles.type1} >Welcome to 1337++, Your guide </span>
                <br />
                <span className={styles.type2}>for  the 1337 school</span>
            </h1>
            <a href="#news">
                {txt.split('').map(char => char !== ' ' ? <Span char={char} />: <pre> </pre>)}
            </a>
        </section>
        </>
    );
}


export default HeroSection;
