import React from "react";
import "./app.css";


function Allrecipiesbutton() {

  const handleClick = () => {
    window.open("/allrecipies", "_self");
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button 
        onClick={handleClick} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        explore recipies
      </button>
    </div>
  );
}

export default Allrecipiesbutton;
