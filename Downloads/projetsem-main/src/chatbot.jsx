import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls chatbot visibility
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) || []
  );
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef(null);

  const API_ID = "2924ba02";
  const API_KEY = "5bddcb2069c125bfb9efe35124827718"; // Edamam API Key

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const autoScroll = () => {
    chatWindowRef.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    autoScroll();
  }, [messages]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Check for calorie range and genre in user input
    const calorieRegex = /between (\d+)\s*and\s*(\d+)\s*calories/i;
    const genreRegex = /genre (\w+)/i;
    const calorieMatch = input.match(calorieRegex);
    const genreMatch = input.match(genreRegex);

    if (calorieMatch || genreMatch) {
      const minCalories = calorieMatch ? calorieMatch[1] : null;
      const maxCalories = calorieMatch ? calorieMatch[2] : null;
      const genre = genreMatch ? genreMatch[1] : null;

      setIsLoading(true);

      let query = "";
      if (genre) {
        query += genre;
      }

      try {
        const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
        const calorieFilter = minCalories && maxCalories ? `&calories=${minCalories}-${maxCalories}` : "";

        const response = await axios.get(`${url}${calorieFilter}`);

        setIsTyping(false);
        setIsLoading(false);

        const foundRecipes = response.data.hits.map((hit) => ({
          label: hit.recipe.label,
          ingredientLines: hit.recipe.ingredientLines,
          calories: hit.recipe.calories,
          healthLabels: hit.recipe.healthLabels,
        }));

        if (foundRecipes.length === 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: `Sorry, I couldn't find any recipes${genre ? ` for genre ${genre}` : ""}${calorieMatch ? ` with calories between ${minCalories} and ${maxCalories}` : ""}.` },
          ]);
          return;
        }

        setRecipes(foundRecipes);

        const recipesList = foundRecipes
          .map((recipe) => recipe.label)
          .join(", ");

        const botMessage = {
          sender: "bot",
          text: `Here are some recipes${genre ? ` for genre ${genre}` : ""}${calorieMatch ? ` with calories between ${minCalories} and ${maxCalories}` : ""}: ${recipesList}. You can ask for ingredients by typing "Recipe for [recipe name]".`,
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsTyping(false);
        setIsLoading(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Oops! Something went wrong. Please try again." },
        ]);
      }

      return;
    }

    // Check for specific recipe request
    if (input.toLowerCase().startsWith("recipe for")) {
      const recipeName = input.replace(/^recipe for/i, "").trim().toLowerCase();
      const selectedRecipe = recipes.find(
        (recipe) => recipe.label.toLowerCase() === recipeName
      );

      setIsTyping(false);

      if (selectedRecipe) {
        const details = `
          Ingredients: ${selectedRecipe.ingredientLines.join(", ")}
          Calories: ${Math.round(selectedRecipe.calories)} kcal
          Health Labels: ${selectedRecipe.healthLabels.join(", ")}
        `;
        const botMessage = {
          sender: "bot",
          text: `Here are the details for "${selectedRecipe.label}": ${details}`,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        const botMessage = {
          sender: "bot",
          text: "Sorry, I couldn't find the recipe you're asking for. Please search for a recipe first.",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
      return;
    }

    // Default behavior if no calorie range or specific recipe is detected
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${input}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&health=alcohol-free`
      );

      setIsTyping(false);
      setIsLoading(false);

      const foundRecipes = response.data.hits.map((hit) => ({
        label: hit.recipe.label,
        ingredientLines: hit.recipe.ingredientLines,
        calories: hit.recipe.calories,
        healthLabels: hit.recipe.healthLabels,
      }));

      if (foundRecipes.length === 0) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, I couldn't find any recipes for that. Try another ingredient!" },
        ]);
        return;
      }

      setRecipes(foundRecipes);

      const recipesList = foundRecipes
        .map((recipe) => recipe.label)
        .join(", ");

      const botMessage = {
        sender: "bot",
        text: `Here are some recipes I found: ${recipesList}. You can ask for ingredients by typing "Recipe for [recipe name]".`,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setIsTyping(false);
      setIsLoading(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={toggleVisibility}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#0078d7",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
      >
        💬
      </button>

      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            left: "20px",
            width: "350px",
            maxHeight: "400px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            fontFamily: "'Roboto', sans-serif",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#0078d7",
              padding: "10px 20px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Recipe Chatbot
          </div>
          <div
            ref={chatWindowRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10",

              backgroundColor: "#fff",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "10px 0",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "15px",
                    backgroundColor: msg.sender === "user" ? "#0078d7" : "#e0e0e0",
                    color: msg.sender === "user" ? "#fff" : "#000",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ textAlign: "left", margin: "10px 0", fontStyle: "italic" }}>
                Chatbot is typing...
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#f1f1f1",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                outline: "none",
              }}
              placeholder="Type an ingredient or 'Recipe for [recipe name]'..."
            />
            <button
              onClick={sendMessage}
              style={{
                backgroundColor: "#0078d7",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
          {isLoading && (
            <div style={{ textAlign: "center", padding: "10px", fontStyle: "italic" }}>
              Searching for recipes...
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
