import styles from "./News.module.css";


function New({ headline, details, img, id }) {

	return (
		<section className={styles.singleNew} id={id}>
			<div className={styles.img}>
				<img src={img} alt="Some random text"/>
			</div>
			<div className={styles.aboutIt}>
				<h3>
					{headline}
				</h3>
				<p className={styles.details}>
					{details}
				</p>
			</div>
		</section>
	);
}

export default New;