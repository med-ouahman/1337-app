import { useReducer } from "react";
import styles from "./Questions.module.css";

import { LiaTimesSolid } from "react-icons/lia";
import { useGlobalContext } from "../../contexts/GlobalContext";

const init = {
  title: "",
  question: "",
}


function reducer(state, action) {

  switch (action.type) {
    case "submit":
      
      if (!state.title.trim() || !state.title.trim())
        return state;
      return init;
    case "set-title":
      return {
        ...state,
        title: action.payload
      }
    case "set-question":
      return {
        ...state,
        question: action.payload
      }
    default:
      throw new Error("Unkown action type!");
  }
}


function AddPostForm({ setIsFormVisible, setQuestions }) {

  const { user } = useGlobalContext();

  const [{ title, question}, dispatch] = useReducer(reducer, init);

  const submitForm = (e) => {
    e.preventDefault();
    if (!title.trim() || !question.trim())
      return ;
    const newPost = {
      id: crypto.randomUUID(),
      title: title,
      body: question,
      img: user.img,
      name: user.name,
      likes: 0,
      disLikes: 0,
      date: new Date().toLocaleTimeString()
    }
    setIsFormVisible(false);
    setQuestions(questions => [newPost, ...questions]);
    dispatch({ type: "submit" });
    
  }

  return ( 
    <div className={styles.formContainer}>
      
      <form
        action="/"
        className={styles.addPostForm}
        onSubmit={submitForm}  
        >
        <button
          className={styles.close}
          type="button"
          onClick={() => setIsFormVisible(false)}
        >
          <LiaTimesSolid />
        </button>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => dispatch({ type: "set-title", payload: e.target.value })}  
          />

        <textarea
        
          placeholder="Your Question"
          value={question}
          onChange={(e) => dispatch({ type: "set-question", payload: e.target.value })}  
          />
          <button type="submit" className={styles.add}>Add Question</button>
  
      </form>
    </div>
  );
}

export default AddPostForm;