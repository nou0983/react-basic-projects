import MenuCard from "../menuCard/menuCard.component";
import "./menusContainer.styles.css";

const MenusContainer = ({ menu }) => {
  return (
    <ul className="container">
      {menu.map((single) => {
        return <MenuCard key={single.id} {...single} />;
      })}
    </ul>
  );
};

export default MenusContainer;
