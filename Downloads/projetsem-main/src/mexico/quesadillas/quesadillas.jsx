import React from "react";
import Header from "../../header";
import "./quesadillas.css";
import Chatbot from "../../chatbot";

const Quesadillas = () => {
  const ingredients = [
    "4 large flour tortillas",
    "2 cups shredded cheddar or Mexican blend cheese",
    "1 cup cooked chicken (shredded or diced)",
    "1/2 cup diced bell peppers",
    "1/4 cup chopped onion",
    "1 tablespoon olive oil",
    "Salt and pepper to taste",
    "Sour cream and salsa for serving",
  ];

  return (
    <body className="quesadillas">
      <Header />
      <div className="recipe-page-quesadillas">
        <div className="recipe-hero-quesadillas">
          <h1>Cheesy Quesadillas</h1>
          <p>A quick and easy Mexican-inspired dish perfect for any meal.</p>
        </div>
        <div className="recipe-content-quesadillas">
          <div className="recipe-left-quesadillas">
            <img
              src="assets/quesadillas.jpg"
              alt="Cheesy Quesadillas"
              className="recipe-image-quesadillas"
            />
          </div>
          <div className="recipe-right-quesadillas">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-quesadillas">
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

export default Quesadillas;
