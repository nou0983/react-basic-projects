import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner.component";
import TourCard from "../tourCard/tourCard.component";
import "./tourContainer.styles.css";

const TourContainer = () => {
  const URL = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(URL).then((res) => {
        if (res.status >= 300 || res.status < 200) {
          throw Error(
            "There was a problem while fetching data from the server"
          );
        }
        return res.json();
      });

      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
  }

  return (
    <section>
      <h1>our tours</h1>
      <hr />
      {error ? (
        <p className="error-message">There was a problem while fetching data from the server. Please try again later.</p>
      ) : (
        <ul className="tour-list">
          {tours.map((tour) => {
            return <TourCard key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default TourContainer;
