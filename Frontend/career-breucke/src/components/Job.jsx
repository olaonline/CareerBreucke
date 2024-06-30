import '../App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Job() {

  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const handleJobClick = async (id) => {
    try {
      const result = await axios.post('http://localhost:3333/job/details', { _id: id });
      navigate(`/job/details`, { state: { job: result.data } });
    } catch (err) {
      console.log(err.message);

    }
  };

  async function getjobs(){
    try{
      const result = await axios.get("http://localhost:3333/job");
      setJobs(result.data);
    }
    catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    getjobs();
  },[])

  return (
    <div className="JobDetails">
        <div className='page-header'>Jobs</div>
        <div className='job-list'>
        {jobs.map(job =>(
          <div className='job-card' key={job._id}>
          <img src="" alt="logo" />
          <div>
          <p className='job-title'>{job.title}</p>
          <p className='job-company'>{job.company_id}</p>
          </div>
          <div>{job.employmentType}</div>
          <p className='job-time'>{job.postedDate}</p>
          <button className='button' onClick={()=> handleJobClick(job._id)}>Job Details</button>
        </div>
        ))}

        </div>
    </div>
  );
}

export default Job;