import { text } from "./utils/data";
import TextContainer from "./components/textContainer/textContainer.component";
import { useState } from "react";

function App() {
  const [numOfText, setNumOfText] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newParagraphs = text.slice(0, numOfText);
    setParagraphs(newParagraphs);
  };

  return (
    <section>
      <h1>tired of boring lorem ipsum?</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="paragraph">paragraphs: </label>
        <input
          type="number"
          name="paragraph"
          id="paragraph"
          value={numOfText}
          min="1"
          max={text.length}
          onChange={(e) => setNumOfText(e.target.value)}
        />
        <button type="submit">generate</button>
      </form>
      <TextContainer paragraphs={paragraphs} />
    </section>
  );
}

export default App;
