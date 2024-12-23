import React from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";
import Loginbutton from "./loginbutton";
import Registerbutton from "./registerbutton";
import Logoutbutton from "./logoutbutton";
import Allrecipiesbutton from "./allrecepiesbutton";

const handleClick = () => {
  window.open("/", "_self");
};

const signedin = localStorage.getItem("signedin");
console.log(signedin);

const username = localStorage.getItem("users");

function Header() {
  if (signedin === "false") {
    return (
      <div>
        <header className="header">
          <a onClick={handleClick}>
            <img src="assets/logo.png" alt="Logo" className="logo" />
          </a>
         
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          
          <div className="auth-buttons">
          <Allrecipiesbutton />
            <Loginbutton />
            <Registerbutton />
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <header className="header">
          <a onClick={handleClick}>
            <img src="assets/logo.png" alt="Logo" className="logo" />
          </a>
          
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <div className="auth-buttons">
            <span>Hello, welcome again</span>
            <Allrecipiesbutton />
            <Logoutbutton />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
