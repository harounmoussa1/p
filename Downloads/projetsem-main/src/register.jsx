import React, { useState } from "react";
import "./index.css"; // Ensure this CSS file exists
import Loginbutton from'./loginbutton'
import Registerbutton from "./registerbutton";

const Register = () => {
  // State to manage form input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Function to save data in local storage
  const saveToLocalStorage = (userData) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save the user data in local storage
    const userData = { username, password };
    saveToLocalStorage(userData);

    // Optionally clear form or navigate
    setError("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    console.log("User registered and saved to local storage:", userData);
  };

  return (
    <body className="register">
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-box">
          <i className="bx bxs-user-pin"></i>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="register-link">
          <p>
            Already have an account? <Loginbutton />
          </p>
        </div>
      </form>
    </div>
    </body>
  );
};

export default Register;
