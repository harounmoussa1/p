import React from "react";

function Logoutbutton() {

  const handleClick = () => {
    localStorage.setItem("signedin",String(false));
    window.location.reload();
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button 
        onClick={handleClick} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        logout
      </button>
    </div>
  );
}

export default Logoutbutton;
