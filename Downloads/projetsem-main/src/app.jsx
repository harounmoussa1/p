import React from "react";
import Header from "./header";
import "./app.css";
import Italy from "./italy/italy"; 

const App = () => {
  const cardData = [
    { src: "assets/tounes.png", alt: "Chef with Tunisian flag", link: "#" },
    { src: "assets/south africa.png", alt: "Chef with South African flag", link: "#" },
    { src: "assets/masr.png", alt: "Chef with Egyptian flag", link: "#" },
    { src: "assets/italy.png", alt: "Chef with Italian flag", link: "/italy" },
    { src: "assets/turkia.png", alt: "Chef with Turkish flag", link: "#" },
    { src: "assets/greece.png", alt: "Chef with Greek flag", link: "#" },
    { src: "assets/mexico.png", alt: "Chef with Mexican flag", link: "#" },
    { src: "assets/argentina.png", alt: "Chef with Argentinian flag", link: "#" },
    { src: "assets/brazil.png", alt: "Chef with Brazilian flag", link: "#" },
    { src: "assets/pelastine.png", alt: "Chef with Palestinian flag", link: "#" },
    { src: "assets/china.png", alt: "Chef with Chinese flag", link: "#" },
    { src: "assets/korea.png", alt: "Chef with Korean flag", link: "/korea" },
  ];

  return (
    <body className="app">
    <div className="App">
      
      

      
      <div className="hero1">
        <h1>HUNGRY?</h1>
        <p>Feed your appetite for global flavors with us!</p>
      </div>

     
      <div className="grid">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <a href={card.link}>
              <img src={card.src} alt={card.alt} className="card-image" />
            </a>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default App;
