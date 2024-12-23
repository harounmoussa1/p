import React from "react";
import Header from "../../header";
import "./pizza.css";
import Chatbot from "../../chatbot";

const Pasta = () => {
  const ingredients = [
    "200g Spaghetti",
    "2 tablespoons olive oil",
    "2 cloves garlic, minced",
    "1 cup cherry tomatoes, halved",
    "1/4 cup grated Parmesan cheese",
    "Salt and pepper to taste",
    "Fresh basil leaves for garnish",
  ];

  return (
    <body className="pasta">
      <Header />
    <div className="recipe-page-pasta">
      
      <div className="recipe-hero-pasta">
        <h1>Pasta Primavera</h1>
        <p>A classic Italian dish that brings freshness and flavor to your table.</p>
      </div>
      <div className="recipe-content-pasta">
        <div className="recipe-left-pasta">
          <img
            src="assets/pasta.jpg"
            alt="Pasta Primavera"
            className="recipe-image-pasta"
          />
        </div>
        <div className="recipe-right-pasta">
          <h2>Ingredients</h2>
          <ul className="ingredient-list-pasta">
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

export default Pasta;
