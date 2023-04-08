import Button from "../button/button.component";
import "./menuCard.styles.css";

const MenuCard = ({ title, img, price, desc }) => {
  return (
    <li className="menu-card">
      <img src={img} alt={title} />
      <div className="header">
        <div className="heading">
          <h2>{title}</h2>
          <Button text={`$${price}`} filter={false} />
        </div>
        <p>{desc}</p>
      </div>
    </li>
  );
};

export default MenuCard;
