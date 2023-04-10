import { useState } from "react";
import ButtonsContainer from "./components/buttonsContainer/buttonsContainer.component";
import MenusContainer from "./components/menusContainer/menusContainer.component";
import { menu } from "./utils/data";

function App() {
  const categories = ["all", ...new Set(menu.map((single) => single.category))];
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const filterMenu = (category) => {
    if (category === "all") {
      setFilteredMenu(menu);
      return;
    }
    
    const newMenu = menu.filter((single) => {
      return single.category === category;
    });
    setFilteredMenu(newMenu);
  };

  return (
    <section>
      <h1>our menu</h1>
      <hr />
      <ButtonsContainer categories={categories} filterMenu={filterMenu} />
      <MenusContainer menu={filteredMenu} />
    </section>
  );
}

export default App;
