import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    foodCategory: "",
    diabetic: "",
    heartPatient: "",
    cholesterol: "",
    bloodPressure: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value === "")) {
      alert("Please answer all questions.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>User Health & Food Preferences</h2>
      <form onSubmit={handleSubmit}>
        {/* Food Category Dropdown */}
        <label>Choose Food Category: <span className="required">*</span></label>
        <select name="foodCategory" value={formData.foodCategory} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Pure Veg">Pure Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Vegan">Vegan</option>
          <option value="All">All</option>
        </select>

        {/* Health Conditions */}
        <label>Are you Diabetic? <span className="required">*</span></label>
        <div className="radio-group">
          <input type="radio" name="diabetic" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="diabetic" value="no" onChange={handleChange} /> No
        </div>

        <label>Are you a heart patient? <span className="required">*</span></label>
        <div className="radio-group">
          <input type="radio" name="heartPatient" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="heartPatient" value="no" onChange={handleChange} /> No
        </div>

        <label>Do you have high cholesterol level? <span className="required">*</span></label>
        <div className="radio-group">
          <input type="radio" name="cholesterol" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="cholesterol" value="no" onChange={handleChange} /> No
        </div>

        <label>Are you a high BP / low BP patient? <span className="required">*</span></label>
        <div className="radio-group">
          <input type="radio" name="bloodPressure" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="bloodPressure" value="no" onChange={handleChange} /> No
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success-msg">Form submitted successfully!</p>}
    </div>
  );
};

export default UserForm;
