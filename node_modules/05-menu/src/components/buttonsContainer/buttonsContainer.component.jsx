import Button from "../button/button.component";
import "./buttonsContainer.styles.css";

const ButtonsContainer = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return <Button key={category} text={category} filter={true} filterMenu={filterMenu} />;
      })}
    </div>
  );
};
export default ButtonsContainer;
