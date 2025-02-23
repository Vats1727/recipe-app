import { useState } from "react";

// Add Recipe Form Component
const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    category: "Pure Veg",
    image: "",
    title: "",
    description: "",
    ingredients: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setRecipe({ ...recipe, image: file });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!recipe.title.trim()) newErrors.title = "Title is required";
    if (!recipe.description.trim()) newErrors.description = "Description is required";
    if (!recipe.ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Food Category: <span className="required">*</span></label>
        <select name="category" value={recipe.category} onChange={handleChange}>
          <option>Pure Veg</option>
          <option>Non-Veg</option>
          <option>Vegan</option>
          <option>All</option>
        </select>

        <label>Recipe Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <label>Title: <span className="required">*</span></label>
        <input type="text" name="title" value={recipe.title} onChange={handleChange} />
        {errors.title && <p className="error">{errors.title}</p>}

        <label>Description: <span className="required">*</span></label>
        <textarea name="description" value={recipe.description} onChange={handleChange} />
        {errors.description && <p className="error">{errors.description}</p>}

        <label>Ingredients: <span className="required">*</span></label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} />
        {errors.ingredients && <p className="error">{errors.ingredients}</p>}

        <button type="submit">Submit Recipe</button>
      </form>
      {submitted && <p className="success-msg">Recipe submitted successfully!</p>}
    </div>
  );
};

export default AddRecipe;
