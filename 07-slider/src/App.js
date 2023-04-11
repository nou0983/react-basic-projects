import { useEffect, useState } from "react";
import { reviews } from "./utils/data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReviewContainer from "./components/reviewContainer/reviewContainer.component";

function App() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextClickHandler();
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line
  }, [currentReview]);

  const checkNumber = (num) => {
    if (num >= reviews.length) {
      return 0;
    } else if (num < 0) {
      return reviews.length - 1;
    } else {
      return num;
    }
  };

  const nextClickHandler = () => {
    const newIndex = currentReview + 1;
    setCurrentReview(checkNumber(newIndex));
  };

  const prevClickHandler = () => {
    const newIndex = currentReview - 1;
    setCurrentReview(checkNumber(newIndex));
  };

  return (
    <section>
      {reviews.map((review, index) => (
        <ReviewContainer
          key={review.id}
          {...review}
          currentReview={currentReview}
          index={index}
          reviews={reviews}
        />
      ))}
      <button type="button" onClick={prevClickHandler}>
        <FaAngleLeft />
      </button>
      <button type="button" onClick={nextClickHandler}>
        <FaAngleRight />
      </button>
    </section>
  );
}

export default App;
