import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <span className="logo-dot"></span>
          <h2>StudySphere</h2>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="start-btn">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;