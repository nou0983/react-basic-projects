import { useEffect, useState } from "react";
import SingleItem from "../singleItem/SingleItem";
import { v4 as uuidv4 } from "uuid";
import "./groceryContainer.css";

const GroceryContainer = () => {
  const getItems = () => {
    const items = localStorage.getItem("groceryList");

    if (items) {
      return JSON.parse(items);
    }
    return [];
  };

  const [items, setItems] = useState(getItems());
  const [itemToAdd, setItemToAdd] = useState("");

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(items));
  }, [items]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (itemToAdd) {
      const newItem = { id: uuidv4(), text: itemToAdd };
      setItems([...items, newItem]);
      setItemToAdd("");
    }
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
  };

  return (
    <section>
      <h1>grocery bud</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="item"
          id="item"
          placeholder="Item to add"
          value={itemToAdd}
          onChange={(e) => setItemToAdd(e.target.value)}
        />
        <button type="submit">add item</button>
      </form>
      <ul>
        {items.length <= 0 ? (
          <li className="empty">your shopping list is currently empty</li>
        ) : (
          items.map((item) => {
            return (
              <SingleItem key={item.id} deleteItem={deleteItem} {...item} />
            );
          })
        )}
      </ul>
    </section>
  );
};

export default GroceryContainer;
