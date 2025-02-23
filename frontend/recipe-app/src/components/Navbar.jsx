import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Recipe App</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/form">User Form</Link>
    </div>
    <div className="search-container">
      <input type="text" placeholder="Search for recipes..." />
      <button>Search</button>
    </div>
  </nav>
);

export default Navbar;
