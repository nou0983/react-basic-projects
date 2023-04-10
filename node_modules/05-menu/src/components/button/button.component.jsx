import "./button.styles.css";

const Button = ({ text, filter, filterMenu }) => {
  const onClickHandler = () => {
    if (filter) {
      filterMenu(text);
    }
  };

  return (
    <button type="button" onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;
