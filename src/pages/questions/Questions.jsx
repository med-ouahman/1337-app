import styles from "./Questions.module.css";
import AddPostForm from "./AddPostForm";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

import Post from "./Post";

import { faker } from "@faker-js/faker";

import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/footer";

function getRandomQuestions(count) {

	return Array.from({ length: count})
	.map(_ => {
		const question = {
			id: faker.string.uuid(),
			title: faker.hacker.phrase(),
			body: faker.lorem.paragraph({ min: 2, max: 4}),
			img: faker.image.avatar(),
			name: faker.person.fullName(),
			likes: 0,
			disLikes: 0,
			date: new Date().toLocaleTimeString()
		}
		return question;
	});
}

function Questions() {

	const [isFormVisible, setIsFormVisible] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [questions, setQuestions] = useState(getRandomQuestions(4));

	const searched = questions.filter(question => {
		if (question.body.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
			|| question.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
			return question;
	});

	const rendered = searched.length > 0 ? searched: questions;
  return (
		<main className={styles.questions}>
			<NavBar />
			{isFormVisible && <AddPostForm setIsFormVisible={setIsFormVisible} setQuestions={setQuestions} /> }
			<div className={styles.header}>
				<div className={styles.search}>
					<input
						type="search" value={searchInput}
						placeholder="Search Posts..."
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<ImSearch />
				</div>
				<button onClick={() => setIsFormVisible(true)}>Ask Question</button>
			</div>

			<div className={styles.posts}>
				{
					rendered.map(question => <Post {...question} key={question.id} />)
				}
			</div>
			<Footer />
		</main>
	);
}

export default Questions;