import "./birthdayItem.styles.css";

const BirthdayItem = ({ name, age, image }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>{age} years</h3>
      </div>
    </li>
  );
};

export default BirthdayItem;
