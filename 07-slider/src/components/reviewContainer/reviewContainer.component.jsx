import { FaQuoteRight } from "react-icons/fa";
import "./reviewContainer.styles.css";

const ReviewContainer = ({ name, job, image, text, index, currentReview, reviews }) => {
  let position = "";

  if (currentReview === index) {
    position = "container-active";
  } else if (currentReview - 1 === index || (currentReview === 0 && index === reviews.length - 1)) {
    position = "container-prev";
  } else {
    position = "container-next";
  }

  return (
    <article className={`container ${position}`}>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
      <span>
        <FaQuoteRight />
      </span>
    </article>
  );
};

export default ReviewContainer;
