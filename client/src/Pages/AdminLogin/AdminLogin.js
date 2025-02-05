import React, { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        alert("Login successful");
        navigate("/adminpanel");
      }
    } catch (error) {
      setErrorMessage("Invalid credentials or server error.");
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">
          <span className="logo">Admin</span>
        </h2>
        <h3>
          <span className="logo">Login</span>
        </h3>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">SUBMIT</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
