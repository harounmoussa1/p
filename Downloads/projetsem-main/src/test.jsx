import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeListPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);  // Keep track of the page number
  const [totalPages, setTotalPages] = useState(1);  // Total pages for pagination

  const randomSearchTerms = [
    'chicken', 'pasta', 'salad', 'dessert', 'vegan', 'seafood', 'breakfast', 'lunch', 'dinner', 'smoothie'
  ];

  // Function to pick a random search term
  const getRandomSearchTerm = () => {
    const randomIndex = Math.floor(Math.random() * randomSearchTerms.length);
    return randomSearchTerms[randomIndex];
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const searchTerm = getRandomSearchTerm(); // Get a random search term
        const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
          params: {
            q: searchTerm,  // Use the random search term
            type: 'public',
            app_id: '2924ba02',  // Replace with your Edamam App ID
            app_key: '5bddcb2069c125bfb9efe35124827718', // Replace with your Edamam API Key
            from: (page - 1) * 10,  // Pagination, 10 results per page
            to: page * 10,  // Display 10 results per page
          },
        });

        setRecipes(response.data.hits);  // Set the recipe list to state
        setTotalPages(Math.ceil(response.data.count / 10));  // Set total pages for pagination
      } catch (error) {
        setError('Failed to fetch recipes');
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [page]);  // Re-fetch when the page changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Recipe List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe, index) => (
          <div key={index} style={{ width: '200px', margin: '10px', textAlign: 'center' }}>
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <h3>{recipe.recipe.label}</h3>
          </div>
        ))}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeListPage;
