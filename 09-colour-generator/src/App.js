import { useState } from "react";
import ColourList from "./components/colourList/ColourList";
import Form from "./components/form/Form";
import Values from "values.js";

function App() {
  const [colors, setColors] = useState(new Values("#006432").all(10));

  const updateColor = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      alert("Please enter a valid hex color!");
    }
  };

  return (
    <main>
      <Form updateColor={updateColor} />
      <ColourList colors={colors} />
    </main>
  );
}

export default App;
