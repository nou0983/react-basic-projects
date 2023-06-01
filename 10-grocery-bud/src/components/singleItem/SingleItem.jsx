import { useState } from "react";
import "./singleItem.css";

const SingleItem = ({ id, text, deleteItem }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <li>
      <span
        className={completed ? "completed" : ""}
        onClick={() => setCompleted(!completed)}
      >
        {text}
      </span>
      <button type="button" onClick={() => deleteItem(id)}>
        delete
      </button>
    </li>
  );
};

export default SingleItem;
