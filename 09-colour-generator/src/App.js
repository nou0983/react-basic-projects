import { useEffect, useState } from "react";
import ColourList from "./components/colourList/ColourList";
import Form from "./components/form/Form";
import Modal from "./components/modal/Modal";
import Values from "values.js";

function App() {
  const [colors, setColors] = useState(new Values("#87ceeb").all(10));
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (formError) {
      setTimeout(() => {
        setFormError(null);
      }, 3000);
    }
  }, [formError]);

  const closeModal = () => {
    setFormError(null);
  };

  const updateColor = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      setFormError("Please enter a valid hex color!");
    }
  };

  return (
    <main>
      <Form updateColor={updateColor} />
      <ColourList colors={colors} />
      {formError && <Modal text={formError} closeModal={closeModal} />}
    </main>
  );
}

export default App;
