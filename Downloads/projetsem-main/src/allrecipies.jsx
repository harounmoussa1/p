import React from 'react'; 
import ReactDOM from 'react-dom';
import './app.css'; 
import App from './app'; 
import Chatbot from './chatbot';
import Header from './header';
import Pizza from './italy/pizza/pizza';
import Italy from './italy/italy';
import Korea from './korea/korea';

const Allrecipies = () => {
    const cardData = [
      { src: "assets/pasta.jpg", alt: "pasta primavera", name: "Pasta Primavera", link: "#" },
      { src: "assets/pizza.jpg", alt: "pizza", name: "Pizza", link: "#" },
      { src: "assets/risotto.png", alt: "risotto", name: "Risotto", link: "#" },
      { src: "assets/lasagna.jpg", alt: "lasagna", name: "Lasagna", link: "#" },
    ];
    <Header/>
    return (
      <body className="allrecipies">
      <div className="food">
        
        <div><Header/></div>
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
  
  export default Allrecipies;
  