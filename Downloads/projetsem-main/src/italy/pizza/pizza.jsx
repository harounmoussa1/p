import React from "react";
import Header from "../../header";
import "./pizza.css";
import Chatbot from "../../chatbot";

const Pizza = () => {
  const ingredients = [
    "1 pizza dough (store-bought or homemade)",
    "1/2 cup tomato sauce",
    "1 cup shredded mozzarella cheese",
    "1/4 cup grated Parmesan cheese",
    "1/2 cup sliced pepperoni",
    "1/4 cup sliced black olives",
    "Fresh basil leaves for garnish",
  ];

  return (
    <body className="pizza">
      <Header />
      <div className="recipe-page-pizza">
        <div className="recipe-hero-pizza">
          <h1>Pizza Margherita</h1>
          <p>A classic Italian dish that brings freshness and flavor to your table.</p>
        </div>
        <div className="recipe-content-pizza">
          <div className="recipe-left-pizza">
            <img
              src="assets/pizza.jpg"
              alt="Pizza Margherita"
              className="recipe-image-pizza"
            />
          </div>
          <div className="recipe-right-pizza">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-pizza">
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

export default Pizza;
