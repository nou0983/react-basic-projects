import "./singleColour.css";

const SingleColour = ({ color, index }) => {
  const { hex, weight } = color;
  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        alert("Copied to clipboard!");
      } catch (error) {
        alert("Failed to copy to clipboard!");
      }
    } else {
      alert("Your browser doesn't support the copy to clipboard!");
    }
  };

  return (
    <div
      className={`color ${index > 10 ? "color-light" : ""}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p>#{hex}</p>
      <p>{weight}</p>
    </div>
  );
};

export default SingleColour;
