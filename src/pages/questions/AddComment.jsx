import { useState } from "react";
import styles from "./Questions.module.css";


function AddComment({ setComments }) {

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim())
      return ;
    const commentItem = {
      id: crypto.randomUUID(),
      content: comment,
      likes: 0,
      disLikes: 0,
      liked: 0,
      date: new Date().toLocaleTimeString(),
    }
    setComment("");
    setComments(comments => [...comments, commentItem]);
  }

  return (
    <form action="/questions" className={styles.addComment} onSubmit={handleSubmit}>
      <textarea
        type="text"
        value={comment}
        placeholder="Add Comment..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit" className={styles.submit}>Submit</button>
    </form>
  );
}


export default AddComment;