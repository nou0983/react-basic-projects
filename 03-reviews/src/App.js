import { useState } from "react";
import { reviews } from "./utils/data";
import ReviewContainer from "./components/reviewContainer/reviewContainer.component";

function App() {
  const [currentReview, setCurrentReview] = useState(0);

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

  const randClickHandler = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);

    while (newIndex === currentReview) {
      newIndex = Math.floor(Math.random() * reviews.length);
    }

    setCurrentReview(newIndex);
  };

  return (
    <>
      <ReviewContainer
        {...reviews[currentReview]}
        nextClickHandler={nextClickHandler}
        prevClickHandler={prevClickHandler}
        randClickHandler={randClickHandler}
      />
    </>
  );
}

export default App;
