import React from "react";
import Header from "../../header";
import "./tacos.css";
import Chatbot from "../../chatbot";

const Tacos = () => {
  const ingredients = [
    "4 small soft tortillas",
    "2 cups cooked and seasoned ground beef",
    "1 cup shredded lettuce",
    "1 cup diced tomatoes",
    "1/2 cup shredded cheddar cheese",
    "1/4 cup sour cream",
    "1/4 cup salsa",
    "Optional: Jalapeños or guacamole for garnish",
  ];

  return (
    <body className="tacos">
      <Header />
      <div className="recipe-page-tacos">
        <div className="recipe-hero-tacos">
          <h1>Delicious Tacos</h1>
          <p>A simple yet flavorful Mexican classic perfect for sharing.</p>
        </div>
        <div className="recipe-content-tacos">
          <div className="recipe-left-tacos">
            <img
              src="assets/tacos.jpg"
              alt="Delicious Tacos"
              className="recipe-image-tacos"
            />
          </div>
          <div className="recipe-right-tacos">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-tacos">
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

export default Tacos;
