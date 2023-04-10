import "./tab.styles.css";

const Tab = ({ index, company, currentJob, changeCurrentJob }) => {
  return (
    <button
      type="button"
      className={index === currentJob ? "tab-selected" : ""}
      onClick={() => changeCurrentJob(index)}
    >
      {company}
    </button>
  );
};

export default Tab;
