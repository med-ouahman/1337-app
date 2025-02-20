import styles from "./Experiences.module.css";

import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function StudentExperience({ img, bio, journy, timeLine, fullName, id }) {

  return (
    <section className={styles.studentExperience} id={id}>
      <div className={styles.profile}>
        <img src={img} alt="Larry" />
        <p>{fullName}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
      
      <div className={styles.timeLine}>
          <p>
            Student at 1337 from {timeLine.from} to {timeLine.to}
          </p>
        </div>
      <div className={styles.aboutStudent}>
        <h3>{fullName + "'"} Journy</h3>
        {journy.map(p => <p>{p}</p>)}
      </div>
      <div className={styles.contact}>
        <h3>Contact {fullName}</h3>
        <div className={styles.socialLinks}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}


export default StudentExperience;