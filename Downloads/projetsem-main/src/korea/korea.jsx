import React from "react";
import Header from "../header";
import "./korea.css";
import Chatbot from "../chatbot";

const Korea = () => {
  const cardData = [
    { src: "assets/pasta.jpg", alt: "pasta primavera", name: "Pasta Primavera", link: "#" },
    { src: "assets/pizza.jpg", alt: "pizza", name: "Pizza", link: "#" },
    { src: "assets/risotto.png", alt: "risotto", name: "Risotto", link: "#" },
    { src: "assets/lasagna.jpg", alt: "lasagna", name: "Lasagna", link: "#" },
  ];

  return (
    <div className="food">
      
      <div className="hero"></div>
      <div className="grid">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <a href={card.link}>
              <img src={card.src} alt={card.alt} className="card-image" />
            </a>
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </div>
      <Chatbot />
    </div>
  );
};

export default Korea;
