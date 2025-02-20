import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>Recipe App</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/form">User Form</Link>
    </div>
  </nav>
);

export default Navbar;
