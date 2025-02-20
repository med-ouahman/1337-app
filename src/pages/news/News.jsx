import styles from "./News.module.css";
;

import New from "./New";
import NewsLetter from "./NewsLetter";

import { useGlobalContext } from "../../contexts/GlobalContext";

import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/footer";

function News() {
	
	const { news, setNews} = useGlobalContext();

	const breaking = news.filter(item => item.category === 0);
	const trending = news.filter(item => item.category === 1);
	const mostRead = news.filter(item => item.category === 2);
	return (
		<>
		
			<NavBar />
		<main className={styles.news} id="news">
			<h1>What's New in 1337?</h1>
			<div className={styles.newsContainer}>
				<h2>Breaking News</h2>
				{
					breaking.map(item => <New {...item} key={item.id} />)
				}
				<h2>Trending</h2>
				{
					trending.map(item => <New {...item} key={item.id} />)
				}
				<h2>Most Read</h2>
				{
					mostRead.map(item => <New {...item} key={item.id} />)
				}
			</div>
			<NewsLetter />
		</main>
		<Footer />
		</>
	);
}


export default News;