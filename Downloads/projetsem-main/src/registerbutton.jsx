import React from "react";

function Registerbutton() {
  
  const handleClick = () => {
    window.open("/register", "_self"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      
      <button 
        onClick={handleClick} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >register
      </button>
    </div>
  );
}

export default Registerbutton;
