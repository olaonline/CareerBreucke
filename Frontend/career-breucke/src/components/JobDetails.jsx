import { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function JobDetails() {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div>
      <div className="page-header">
        {job.title}
        <p>
          {" "}
          <span>{job.Location}</span> | <span>{job.employmentType}</span> |{" "}
          <span>
            <button>View Company Profile</button>
          </span>
        </p>
      </div>
      <div className="details-container">
        <div className="details-content-left">
          <h1>{job.title}</h1>
          <br></br>
          <p>{job.Description}</p>
          <br></br>
          <p>{job.Requirements}</p>
        </div>
        <div className="details-content-right">
          <div className="details-content-right-bubble">
          <h2>Job Overview</h2>
          <br></br>
          <p>Date Posted:</p>
          <p>{job.postedDate}</p>
          <br></br>
          <p>Location:</p>
          <p>{job.Location}</p>
          </div>
          <div className="details-content-right-bubble">
          <h2>Company Overview</h2>
          <br></br>
          <p>Sector:</p>
          <p>{job.postedDate}</p>
          <br></br>
          <p>Type:</p>
          <p>{job.Location}</p>
          </div>
          <br />
          <button className="button full-width">Apply Now!</button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;