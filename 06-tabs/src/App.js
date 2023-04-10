import { useEffect, useState } from "react";
import Spinner from "./components/spinner/spinner.component";
import InfoContainer from "./components/infoContainer/infoContainer.component";
import TabsContainer from "./components/tabsContainer/tabsContainer.component";

function App() {
  const URL = "https://course-api.com/react-tabs-project";

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);

  const changeCurrentJob = (num) => {
    setCurrentJob(num);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(URL).then((res) => {
        if (res.status >= 400 || res.status < 200) {
          throw new Error(
            "There was an error while fetching data from the server"
          );
        }
        return res.json();
      });

      const newCompanies = data.map((job) => job.company);  

      setJobs(data);
      setCompanies(newCompanies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <TabsContainer
        companies={companies}
        currentJob={currentJob}
        changeCurrentJob={changeCurrentJob}
      />
      <InfoContainer job={jobs[currentJob]} />
    </section>
  );
}

export default App;
