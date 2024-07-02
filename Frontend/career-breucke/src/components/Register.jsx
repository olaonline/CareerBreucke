import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../img/icon.png";
import axios from "axios";

const Register = () => {
  const [companyName, setcompanyName] = useState("");
  const [companyEmail, setcompanyEmail] = useState("");
  const [comapnyPassword, setcomapnyPassword] = useState("");
  const [companyLogo, setcompanyLogo] = useState(icon);
  //   const [companySector, setcompanySector] = useState("");
  //   const [companyType, setcompanyType] = useState("");
  //   const [companyLocation, setcompanyLocation] = useState("");
  //   const [companyFounded, setcompanyFounded] = useState("");

  const [activeButton, setActiveButton] = useState(null);

  const navigate = useNavigate();

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3333/company", {
        name: companyName,
        email: companyEmail,
        password: comapnyPassword,
        logo: companyLogo,
        // sector: companySector,
        // type: companyType,
        // location: companyLocation,
        // founded: companyFounded,
      });
      console.log(result);
      navigate("/job");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="page-header">
        Register
        <p></p>
      </div>
      <div className="register-container">
        <div className="register-header">
          <div className="register-text"></div>
          <div className="register-underline"></div>
        </div>
        <form className="register-inputs" onSubmit={handleSubmit}>
          <div className="register-buttons">
            <button
              type="button"
              className={`button2 ${
                activeButton === "jobSeeker" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("jobSeeker")}
            >
              Job Seeker
            </button>
            <button
              type="button"
              className={`button2 ${
                activeButton === "company" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("company")}
            >
              Company
            </button>
          </div>
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            name=""
            id="company-name"
            placeholder="Company Name"
            onChange={(e) => setcompanyName(e.target.value)}
          />

          <label htmlFor="company-email">Company email</label>
          <input
            type="email"
            name=""
            id="company-email"
            placeholder="Company email"
            onChange={(e) => setcompanyEmail(e.target.value)}
          />

          <label htmlFor="company-password">Company password</label>
          <input
            type="password"
            name=""
            id="company-password"
            placeholder="Company password"
            onChange={(e) => setcomapnyPassword(e.target.value)}
          />

          <input type="submit" value="Register" className="button" />
        </form>
      </div>
    </>
  );
};

export default Register;
