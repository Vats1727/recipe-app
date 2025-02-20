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
          <h1>Recipe App</h1>
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
  <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2>Welcome to Recipe Sharing App</h2>
    <p>Find and share amazing recipes based on your health and diet preferences.</p>
  </motion.div>
);

export default App;
