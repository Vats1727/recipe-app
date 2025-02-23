import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./styles.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserForm from "./components/UserForm";
import AddRecipe from "./components/AddRecipe"; // Import AddRecipe Page

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-section logo-section">
            <h1 className="logo">Bite Buddy</h1>
          </div>
          <div className="nav-section menu-section">
            <div className="menu">
              <Link to="/">Home</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
              <Link to="/form">User Form</Link>
              <Link to="/add-recipe" className="btn-add-recipe">Add Recipe</Link> {/* New Button */}
            </div>
          </div>
          <div className="nav-section search-section">
            <div className="search-container">
              <input type="text" placeholder="Search for recipes..." />
              <button>Search</button>
            </div>
          </div>
        </nav>

        <div style={{ flex: 1 }}>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/add-recipe" element={<AddRecipe />} /> {/* New Route */}
          </Routes>
        </div>

         {/* Footer */}
         <footer className="footer" style={{ backgroundColor: "#FFE5B4", textAlign: "center", padding: "1rem", marginTop: "auto" }}>
          <p>&copy; {new Date().getFullYear()} Bite Buddy. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}


   // Home Page Component (Includes Most Viewed & Favorite Section)
const HomePage = () => (
  <>
    <LandingPage />
    <section className="categories-section" style={{ textAlign: "center", padding: "4rem 0" }}>
      <h2 style={{ marginBottom: "2rem" }}>Most Viewed Categories</h2>
      <div className="recipe-placeholder" style={{ height: "200px", background: "#f3f3f3", borderRadius: "10px", marginBottom: "3rem" }}> 
        <p style={{ lineHeight: "200px", color: "#888" }}>Recipe Blog Section</p>
      </div>
      <h2 style={{ marginBottom: "2rem" }}>Seasonal Recipe</h2>
      <div className="recipe-placeholder" style={{ height: "200px", background: "#f3f3f3", borderRadius: "10px", marginBottom: "3rem" }}> 
        <p style={{ lineHeight: "200px", color: "#888" }}>Recipe Blog Section</p>
      </div>
      <h2 style={{ marginBottom: "2rem" }}>Favorite Page</h2>
      <div className="recipe-placeholder" style={{ height: "200px", background: "#f3f3f3", borderRadius: "10px" }}> 
        <p style={{ lineHeight: "200px", color: "#888" }}>Recipe Blog Section</p>
      </div>
    </section>
  </>
);

// Landing Page Component
const LandingPage = () => (
  <motion.div 
    className="landing-container"
    style={{ backgroundImage: "url('/b new.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Bite Buddy</h1>
          <p>Discover, share, and enjoy delicious recipes tailored to your taste!</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="#" className="btn-secondary">Explore Recipes</Link>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default App;
