
import { useState } from "react";
import styles from "./ExperiencesSection.module.css"

import ModalContainer from "./ModalContainer";
import { useEffect } from "react";

function ExperienceItem() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	}

	useEffect(() => {
		if (isModalVisible)
			document.body.style = "overflow: hidden;";
		else
			document.body.style = "overflow: scroll;"
	}, [isModalVisible])
	return (
		<>
		{
			isModalVisible
			&&
			<ModalContainer
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
		}
		<div className={styles.experienceItem}>
			<div className={styles.profile}>
				<img src="/public/cat-5579221.jpg" alt="Profile img" />
				<p>Larry The Cat</p>
			</div>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni repellendus maiores voluptate numquam ut tempore sequi? Unde voluptatem aliquid saepe laudantium adipisci. Iure fugit, molestiae velit consequatur eos nam corporis.
			</p>
			<button to="/experiences" onClick={showModal}>
				See Full Story
			</button>
		</div>
		</>
	);
}


export default ExperienceItem;