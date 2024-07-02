import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import icon from "../img/icon.png";

function Job() {
  const [jobs, setjobs] = useState([]);
  // const [company, setCompany] = useState({});
  const navigate = useNavigate();

  const handlejobClick = async (id) => {
    try {
      const result = await axios.post("http://localhost:3333/job/details", {
        _id: id,
      });
      navigate(`/job/details`, { state: { job: result.data } });
    } catch (err) {
      console.log(err.message);
    }
  };

  async function getjobs() {
    try {
      const result = await axios.get("http://localhost:3333/job");
      setjobs(result.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getjobs();
  }, []);

  return (
    <div className="jobDetails">
      <div className="page-header">Jobs</div>
      <div className="job-list">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <img src={icon} alt="logo" />
            <div>
              <p className="job-title">{job.title}</p>
              <p className="job-company">{job.company_id}</p>
            </div>
            <div>{job.employmentType}</div>
            <p className="job-time">
              {new Date(job.postedDate).toDateString()}
            </p>
            <button className="button" onClick={() => handlejobClick(job._id)}>
              Job Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;
