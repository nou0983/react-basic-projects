import { useState } from "react";
import "./tourCard.styles.css";

const TourCard = ({ id, name, info, price, image, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <li>
      <img src={image} alt={name} />
      <span className="price">${price}</span>
      <div className="tour-details">
        <h2>{name}</h2>
        <p>
          {showMore ? info : `${info.substring(0, 200)} ...`}{" "}
          <button
            type="button"
            className="btn-show"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn-delete"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </li>
  );
};
export default TourCard;
