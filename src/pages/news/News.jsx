import styles from "./News.module.css";


import New from "./New";
import NewsLetter from "./NewsLetter";

function News() {
	
	return (
		<main className={styles.news}>
			<h1>What's New in 1337?</h1>
			<div className={styles.newsContainer}>
				<h2>Breaking News</h2>
				<New />
				<New />
				<New />
				<h2>Trending</h2>

				<New />
				<New />
				<h2>Most Read</h2>
				<New />
				<New />
			</div>
			<NewsLetter />
		</main>
	);
}


export default News;