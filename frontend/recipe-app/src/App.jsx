import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import "./styles.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <h1>Bite Buddy</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/form">User Form</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

// Landing Page Component
const LandingPage = () => (
  <motion.div 
    className="landing-container"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    {/* Hero Section */}
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Bite Buddy</h1>
          <p>Discover, share, and enjoy delicious recipes tailored to your taste!</p>
          <div className="search-container">
            <input type="text" placeholder="Search for recipes..." />
            <button>Search</button>
          </div>
          <div className="cta-buttons">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="#" className="btn-secondary">Explore Recipes</Link>
          </div>
        </div>
      </div>
    </div>

    {/* Featured Recipes Section */}
    <section className="featured-recipes">
      <h2>Featured Recipes</h2>
      <div className="recipe-grid">
        <div className="recipe-card">
          <img src="/1.jpeg" alt="Pasta" />
          <h3>Delicious Pasta</h3>
        </div>
        <div className="recipe-card">
          <img src="/2.jpeg" alt="Salad" />
          <h3>Healthy Salad</h3>
        </div>
        <div className="recipe-card">
          <img src="/3.jpeg" alt="Dessert" />
          <h3>Sweet Dessert</h3>
        </div>
      </div>
    </section>
  </motion.div>
);

// export default LandingPage;
export default App;
