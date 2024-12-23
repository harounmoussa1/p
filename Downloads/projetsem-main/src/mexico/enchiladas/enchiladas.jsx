import React from "react";
import Header from "../../header";
import "./enchiladas.css";
import Chatbot from "../../chatbot";

const Enchiladas = () => {
  const ingredients = [
    "8 small corn tortillas",
    "2 cups cooked and shredded chicken",
    "1 cup enchilada sauce",
    "1 cup shredded cheddar or Monterey Jack cheese",
    "1/2 cup diced onions",
    "1/2 cup diced bell peppers",
    "1/4 cup chopped fresh cilantro",
    "Sour cream and salsa for serving",
  ];

  return (
    <body className="enchiladas">
      <Header />
      <div className="recipe-page-enchiladas">
        <div className="recipe-hero-enchiladas">
          <h1>Chicken Enchiladas</h1>
          <p>A flavorful and comforting Mexican dish loaded with cheese and sauce.</p>
        </div>
        <div className="recipe-content-enchiladas">
          <div className="recipe-left-enchiladas">
            <img
              src="assets/enchiladas.jpg"
              alt="Delicious Enchiladas"
              className="recipe-image-enchiladas"
            />
          </div>
          <div className="recipe-right-enchiladas">
            <h2>Ingredients</h2>
            <ul className="ingredient-list-enchiladas">
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

export default Enchiladas;
