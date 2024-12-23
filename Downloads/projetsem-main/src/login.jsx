import React, { useState } from "react";
import "./index.css"; // Ensure this CSS file exists
import Loginbutton from'./loginbutton'
import Registerbutton from "./registerbutton";
import Home from "./home";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  // Function to validate user credentials
  const handleLogin = (event) => {
    event.preventDefault();

    // Fetch users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered credentials match any stored user
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      
      console.log("Login successful for user:", username);
      localStorage.setItem("signedin",String(true));
      window.open("/", "_self");
      

      // Perform login actions, e.g., navigate to a dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <body className="login">
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-box">
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
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> remember me
          </label>
        </div>
        <button type="submit" className="btn">
          login
        </button>
        <div className="register-link">
          <p>
            Don't have an account? <Registerbutton />
          </p>
        </div>
      </form>
    </div>
    </body>
  );
};

export default Login;

