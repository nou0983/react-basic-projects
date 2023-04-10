import Tab from "../tab/tab.component";
import "./tabsContainer.styles.css";

const TabsContainer = ({ companies, currentJob, changeCurrentJob }) => {
  return (
    <div className="tabs-container">
      {companies.map((company, index) => (
        <Tab
          key={index}
          index={index}
          company={company}
          currentJob={currentJob}
          changeCurrentJob={changeCurrentJob}
        />
      ))}
    </div>
  );
};
export default TabsContainer;
