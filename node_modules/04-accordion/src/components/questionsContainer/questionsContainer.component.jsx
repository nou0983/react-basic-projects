import { questions } from "../../utils/data";
import "./questionsContainer.styles.css";
import QuestionCard from "../questionCard/questionCard.component";

const QuestionsContainer = () => {
  return (
    <div className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return <QuestionCard key={question.id} {...question} />;
      })}
    </div>
  );
};

export default QuestionsContainer;
