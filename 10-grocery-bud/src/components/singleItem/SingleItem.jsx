import "./singleItem.css";

const SingleItem = ({ id, text, completed, deleteItem, toggleComplete }) => {
  return (
    <li>
      <span
        className={completed ? "completed" : ""}
        onClick={() => toggleComplete(id, !completed)}
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
