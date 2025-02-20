import styles from "./Questions.module.css";

import Comments from "./Comments";
import AddComment from "./AddComment";

import { useState } from "react";

function Post({ title, body, img, name }) {

  const [comments, setComments] = useState([]);

  return (
    <div className={styles.post}>
      <div className={styles.profile}>
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <div className={styles.question}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <AddComment
        setComments={setComments}
      />
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}

export default Post;