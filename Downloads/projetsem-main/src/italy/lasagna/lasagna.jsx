import React from "react";
import Header from "../../header";
import "./lasagna.css";
import Chatbot from "../../chatbot";

const Lasagna = () => {
  const ingredients = [
    "12 lasagna noodles, cooked",
    "2 cups marinara sauce",
    "500g ricotta cheese",
    "2 cups shredded mozzarella cheese",
    "1/2 cup grated Parmesan cheese",
    "500g ground beef or sausage (optional)",
    "1 tablespoon olive oil",
    "Salt and pepper to taste",
    "Fresh parsley for garnish",
  ];

  return (
    <body className="lasagna">
      <Header />
      <div className="recipe-page-lasagna">
        <div className="recipe-hero-lasagna">
          <h1>Classic Lasagna</h1>
          <p>A hearty and comforting Italian dish for any occasion.</p>
        </div>
        <div className="recipe-content-lasagna">
          <div className="recipe-left-lasagna">
            <img
              src="assets/lasagna.jpg"
              alt="Classic Lasagna"
              className="recipe-image-lasagna"
            />
          </div>
          <div className="recipe-right-lasagna">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-lasagna">
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

export default Lasagna;
