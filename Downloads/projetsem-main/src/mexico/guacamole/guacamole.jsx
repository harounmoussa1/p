import React from "react";
import Header from "../../header";
import "./guacamole.css";
import Chatbot from "../../chatbot";

const Guacamole = () => {
  const ingredients = [
    "3 ripe avocados",
    "1 small onion, finely chopped",
    "2 Roma tomatoes, diced",
    "1 clove garlic, minced",
    "1 lime, juiced",
    "Salt and pepper to taste",
    "Fresh cilantro for garnish (optional)",
  ];

  return (
    <body className="guacamole">
      <Header />
      <div className="recipe-page-guacamole">
        <div className="recipe-hero-guacamole">
          <h1>Classic Guacamole</h1>
          <p>A fresh and creamy Mexican dip perfect for any occasion.</p>
        </div>
        <div className="recipe-content-guacamole">
          <div className="recipe-left-guacamole">
            <img
              src="assets/guacamole.jpg"
              alt="Classic Guacamole"
              className="recipe-image-guacamole"
            />
          </div>
          <div className="recipe-right-guacamole">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-guacamole">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <Chatbot />
      </div>
    </body>
  );
};

export default Guacamole;
