import { useState } from "react";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    category: "Pure Veg",
    image: "",
    title: "",
    description: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setRecipe({ ...recipe, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="add-recipe-container">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Food Category:</label>
        <select name="category" value={recipe.category} onChange={handleChange}>
          <option>Pure Veg</option>
          <option>Non-Veg</option>
          <option>Vegan</option>
          <option>All</option>
        </select>

        <label>Recipe Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <label>Title:</label>
        <input type="text" name="title" value={recipe.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={recipe.description} onChange={handleChange} required />

        <label>Ingredients:</label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
