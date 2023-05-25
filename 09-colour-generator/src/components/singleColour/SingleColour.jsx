import { useState, useEffect } from "react";
import "./singleColour.css";
import Modal from "../modal/Modal";

const SingleColour = ({ color, index }) => {
  const { hex, weight } = color;
  const [copyMessage, setCopyMessage] = useState(null);

  useEffect(() => {
    if (copyMessage) {
      setTimeout(() => {
        setCopyMessage(null);
      }, 2000);
    }
  }, [copyMessage]);

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        setCopyMessage("Copied to clipboard!");
      } catch (error) {
        setCopyMessage("Failed to copy to clipboard!");
      }
    } else {
      setCopyMessage("Your browser doesn't support the copy to clipboard!");
    }
  };

  return (
    <>
      <div
        className={`color ${index > 10 ? "color-light" : ""}`}
        style={{ backgroundColor: `#${hex}` }}
        onClick={copyToClipboard}
      >
        <p>#{hex}</p>
        <p>{weight}</p>
      </div>
      {copyMessage && <Modal text={copyMessage} />}
    </>
  );
};

export default SingleColour;
