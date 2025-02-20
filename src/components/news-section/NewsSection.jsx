import { useState } from "react";




import styles from "./NewsSection.module.css";

import NewsItem from "./NewsItem";
import { useGlobalContext } from "../../contexts/GlobalContext";


function NewsSection() {
	const { news } = useGlobalContext();
	const limited = news.filter((_, index) => index < 3);
	
  return (
		<section className={styles.newsSection} id="news">
	
			<h2>Latest News</h2>
			<div className={styles.newsContainer}>
				{limited.map(item => <NewsItem {...item} key={crypto.randomUUID()} />)}
			</div>
		</section>
	);
}


export default NewsSection;