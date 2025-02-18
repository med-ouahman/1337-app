import styles from "./News.module.css";


function New() {

	return (
		<section className={styles.singleNew}>
			<div className={styles.img}>
				<img src="/1_bAr3HRQ-grFsSfWjsdDp-w.webp" alt="Some random text"/>
			</div>
			<div className={styles.aboutIt}>
				<h3>
					aid-bray was evaluated on push_swap and got 0.
				</h3>
				<p className={styles.details}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Enim aliquam quis amet! Recusandae incidunt fuga nemo distinctio vitae non! Illo vero nisi suscipit laboriosam, odit autem totam veniam ipsum delectus.
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorem voluptatibus voluptatum, commodi impedit est deserunt fugit facilis sequi placeat amet! 	Quos vel inventore asperiores molestias dolore soluta, odit iure?
				</p>
			</div>
		</section>
	);
}

export default New;