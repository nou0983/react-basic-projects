import { useState } from "react";
import "./form.css";

const Form = ({ updateColor }) => {
  const [color, setColor] = useState("#87ceeb");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateColor(color);
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <section className="form-container">
      <h2>colour generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          id="color-picker"
          value={color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          id="color-text"
          value={color}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`${color === "#ffffff" ? "color-dark" : ""}`}
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    
    </section>
  );
};

export default Form;
