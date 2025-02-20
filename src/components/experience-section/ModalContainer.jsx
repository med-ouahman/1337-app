import styles from "./ExperiencesSection.module.css";


function ModalContainer({ isModalVisible, setIsModalVisible }) {
  
	return (
		<div className={styles.modalContainer}>
			<div className={styles.modal}>
				<button
				onClick={() => setIsModalVisible(false)}
				>
					&times;
				</button>
				
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit harum perspiciatis minima repellendus laboriosam repudiandae error est officiis, voluptate quam veniam blanditiis suscipit eius necessitatibus tempora neque eveniet quisquam minus dolores qui fugiat eaque aut. Quaerat, exercitationem natus placeat praesentium eligendi quae quo voluptatum. Eius numquam ipsa cumque explicabo totam enim repellat dicta ipsum.
				</p>

				<div className={styles.contact}>
					<h3>Contact Larry</h3>
				</div>
			</div>
		</div>
	);
}


export default ModalContainer;