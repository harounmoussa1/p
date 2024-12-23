import React from "react";
import Header from "../../header";
import "./risotto.css";
import Chatbot from "../../chatbot";

const Risotto = () => {
  const ingredients = [
    "200g Arborio rice",
    "2 tablespoons olive oil",
    "1 small onion, finely chopped",
    "1/2 cup dry white wine",
    "4 cups chicken or vegetable stock, heated",
    "1/2 cup grated Parmesan cheese",
    "Salt and pepper to taste",
    "Fresh parsley for garnish",
  ];

  return (
    <body className="risotto">
      <Header />
      <div className="recipe-page-risotto">
        <div className="recipe-hero-risotto">
          <h1>Risotto Primavera</h1>
          <p>A creamy Italian classic to elevate your meal.</p>
        </div>
        <div className="recipe-content-risotto">
          <div className="recipe-left-risotto">
            <img
              src="assets/risotto.jpg"
              alt="Risotto Primavera"
              className="recipe-image-risotto"
            />
          </div>
          <div className="recipe-right-risotto">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-risotto">
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

export default Risotto;
