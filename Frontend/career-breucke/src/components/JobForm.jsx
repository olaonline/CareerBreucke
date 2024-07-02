import "../App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("Full-time");
  const [jobLocation, setJobLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [Company_id, setCompany_id] = useState("667f1aa12258b6c1f2a82f9d");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3333/job", {
        title: jobTitle,
        Category: jobCategory,
        employmentType: jobType,
        Location: jobLocation,
        SalaryRange: salaryRange,
        Description: jobDescription,
        Requirements: jobRequirements,
        Company_id: Company_id,
      });
      console.log(result);
      alert("Added Successfully!")
      navigate('/job');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="page-header">Add a Job</div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            name="Job Title"
            id="job-title"
            placeholder="Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />

          <label htmlFor="job-cat">Job Category</label>
          <input
            type="text"
            name="Job Category"
            id="job-cat"
            placeholder="Category"
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
          />

          <label htmlFor="job-type">Job Type</label>
          <select
            name=""
            id="job-type"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
          </select>
          <label htmlFor="job-loc">Job Location</label>
          <input
            type="text"
            name="Job Location"
            id="job-loc"
            placeholder="Location"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
          />

          <label htmlFor="job-sal">Salary Range</label>
          <input
            type="text"
            name="Salary Range"
            id="job-sal"
            placeholder="100-200"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
          />

          <label htmlFor="job-des">Job Description</label>
          <input
            type="text"
            name="Job Description"
            id="job-des"
            placeholder="Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <label htmlFor="job-req">Job Requirements</label>
          <textarea
            type="text"
            name="Job Requirements"
            id="job-req"
            placeholder="Requirements"
            value={jobRequirements}
            onChange={(e) => setJobRequirements(e.target.value)}
          />

          <input
            className="button full-width white"
            type="submit"
            value="Add a Job"
          />
        </form>
      </div>
    </div>
  );
}

export default JobForm;
