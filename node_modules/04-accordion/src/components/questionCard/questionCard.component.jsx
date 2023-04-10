import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./questionCard.styles.css";

const QuestionCard = ({ title, info }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <article className="question-card">
      <div className="header">
        <h2>{title}</h2>
        <button type="button" onClick={() => setShowAll(!showAll)}>
          {showAll ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {showAll && <p>{info}</p>}
    </article>
  );
};

export default QuestionCard;