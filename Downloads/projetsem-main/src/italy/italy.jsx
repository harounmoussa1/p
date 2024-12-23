import React from "react";
import Header from "../header";
import "./italy.css";
import Chatbot from "../chatbot";

const Italy = () => {
  const cardData = [
    { src: "assets/pasta.jpg", alt: "pasta primavera", name: "Pasta Primavera", link: "#" },
    { src: "assets/pizza.jpg", alt: "pizza", name: "Pizza", link: "#" },
    { src: "assets/risotto.jpg", alt: "risotto", name: "Risotto", link: "#" },
    { src: "assets/lasagna.jpg", alt: "lasagna", name: "Lasagna", link: "#" },
  ];

  return (
    <body className="italy">
    <div className="food">
      <Header/>
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
    </body>
  );
};

export default Italy;
