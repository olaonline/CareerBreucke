import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../img/icon.png";
import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3333/company", {
        email: Email,
        password: Password,
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
        Login
        <p></p>
      </div>
      <div className="register-container">
        <div className="register-header">
          <div className="register-text"></div>
          <div className="register-underline"></div>
        </div>
        <form className="register-inputs" onSubmit={handleSubmit}>
          <label htmlFor="company-email">Email</label>
          <input
            type="email"
            name=""
            id="company-email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="company-password">Password</label>
          <input
            type="password"
            name=""
            id="company-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Login" className="button" />
        </form>
      </div>
    </>
  );
};

export default Login;
