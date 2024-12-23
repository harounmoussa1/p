import React from "react";

function Loginbutton() {

  const handleClick = () => {
    window.open("/login", "_self");
    localStorage.setItem("signedin",String(false));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button 
        onClick={handleClick} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        login
      </button>
    </div>
  );
}

export default Loginbutton;
