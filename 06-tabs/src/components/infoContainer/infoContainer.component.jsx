import { BiCheckDouble } from "react-icons/bi";
import "./infoContainer.styles.css";

const InfoContainer = ({ job }) => {
  const { title, company, dates, duties } = job;

  return (
    <div className="info-container">
      <h1>{title}</h1>
      <h2>{company}</h2>
      <h3>{dates}</h3>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>
            <BiCheckDouble />
            <p>{duty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoContainer;
