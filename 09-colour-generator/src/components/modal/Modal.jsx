import { FaTimes } from "react-icons/fa";
import "./modal.css";

const Modal = ({ text, closeModal }) => {
  return (
    <div className="modal">
      <h3>{text}</h3>
      {closeModal && (
        <button type="button" className="btn-close" onClick={closeModal}>
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Modal;
