import "./textContainer.styles.css";

const TextContainer = ({ paragraphs }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TextContainer;
