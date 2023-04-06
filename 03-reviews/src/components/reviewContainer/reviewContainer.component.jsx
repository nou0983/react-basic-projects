import { FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./reviewContainer.styles.css";

const ReviewContainer = ({
  name,
  job,
  image,
  text,
  nextClickHandler,
  prevClickHandler,
  randClickHandler,
}) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={image} alt={name} />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
      <div className="btn-container">
        <button type="button" onClick={prevClickHandler}>
          <FaAngleLeft />
        </button>
        <button type="button" onClick={nextClickHandler}>
          <FaAngleRight />
        </button>
      </div>
      <button type="button" className="btn-random" onClick={randClickHandler}>
        surprise me
      </button>
    </div>
  );
};

export default ReviewContainer;
