import React from "react";
import Header from "../header";
import "./mexico.css";
import Chatbot from "../chatbot";

const Mexico = () => {
  const cardData = [
    { src: "assets/tacos.jpg", alt: "tacos", name: "tacos", link: "#" },
    { src: "assets/quesadillas.jpg", alt: "quesadillas", name: "quesadillas", link: "#" },
    { src: "assets/guacamole.jpg", alt: "guacamole", name: "guacamole", link: "#" },
    { src: "assets/enchiladas.jpg", alt: "enchiladas", name: "enchiladas", link: "#" },
  ];

  return (
    <body className="mexico">
    <div className="food-mexico">
      <Header/>
      <div className="hero-mexico"></div>
      <div className="grid-mexico">
        {cardData.map((card, index) => (
          <div className="card-mexico" key={index}>
            <a href={card.link}>
              <img src={card.src} alt={card.alt} className="card-image-mexico" />
            </a>
            <p className="card-name-mexico">{card.name}</p>
          </div>
        ))}
      </div>
      <Chatbot />
    </div>
    </body>
  );
};

export default Mexico;
