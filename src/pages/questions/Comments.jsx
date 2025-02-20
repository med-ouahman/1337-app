import styles from "./Questions.module.css";

import { TbArrowsSort } from "react-icons/tb";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useState } from "react";



function formatDate(date) {

  return date;
}

function sortBy(comments, sorting) {

  if (sorting === "recent")
    return comments.reverse();
  if (sorting === "most-liked")
    return comments.sort((a, b) => a.likes > b.likes);
  return comments;
}


function Comments({ comments, setComments}) {

  const [sorting, setSorting] = useState("recent");

  const sorted = sortBy(comments, sorting);

  return (
    <div className={styles.comments}>
      <div className={styles.count}>
        <p>Comments (<span>{comments.length}</span>)</p>
        <div className={styles.sort}>
          <TbArrowsSort />
          <select
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="recent">Recent</option>
            <option value="most-liked">Most Liked</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
     {
      sorted.map(comment => <Comment {...comment} key={comment.id} setComments={setComments} />)
     }
     <button
        className={styles.seeMore}
      >
        See More
      </button>
    </div>
  );
}


function Comment({ content, likes, disLikes, date, id, setComments }) {

  const { user } = useGlobalContext();

  const incrementLikes = () => {
    setComments(comments => {
      const comment = comments.find(comment => comment.id === id);
      if (!comment || comment.liked === 1)
        return comments;
      if (comment.liked === 0)
        return comments.map(comment => comment.id === id ? {...comment, liked: 1, likes: comment.likes + 1}: comment);
      if (comment.liked === 2)
        return comments.map(comment => comment.id === id ? {...comment, liked: 1, likes: comment.likes + 1, disLikes: comment.disLikes - 1 }: comment);
    });
  }

  const decrementLikes = () => {
    setComments(comments => {
      const comment = comments.find(comment => comment.id === id);
      if (!comment || comment.liked === 2)
        return comments;
      if (comment.liked === 0)
        return comments.map(comment => comment.id === id ? {...comment, liked: 2, disLikes: comment.disLikes + 1}: comment);
      if (comment.liked === 1)
        return comments.map(comment => comment.id === id ? {...comment, liked: 2, likes: comment.likes - 1, disLikes: comment.disLikes + 1 }: comment);
    });
  }

  return (
    <div className={styles.comment}>
     <div className={styles.commentInfo}>
      <img src={user.img} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{formatDate(date)}</p>
     </div>
     <p className={styles.commentTxt}>
     {content}
     </p>
     <div className={styles.likes}>
      <button onClick={incrementLikes}>
        <AiFillLike />
        {likes}
      </button>
      <button>
        <AiFillDislike onClick={decrementLikes} />
        {disLikes}
      </button>
      </div>
      
    </div>
  );
}


export default Comments;