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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/add-recipe" element={<AddRecipe />} /> {/* New Route */}
        </Routes>
        
        {/* Footer */}
        <footer className="footer" style={{ backgroundColor: "#FFE5B4", textAlign: "center", padding: "1rem", marginTop: "20px" }}>
          <p>&copy; {new Date().getFullYear()} Bite Buddy. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

// Landing Page Component
const LandingPage = () => (
  <motion.div 
    className="landing-container"
    style={{ backgroundImage: "url('/b.png')", backgroundSize: "cover", backgroundPosition: "center" }}
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
