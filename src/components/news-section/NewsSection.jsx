import { useState } from "react";




import styles from "./NewsSection.module.css";

import NewsItem from "./NewsItem";


function NewsSection() {
	
  return (
		<section className={styles.newsSection} id="news">
	
			<h2>Latest News</h2>
			<div className={styles.newsContainer}>
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</div>
		</section>
	);
}


export default NewsSection;