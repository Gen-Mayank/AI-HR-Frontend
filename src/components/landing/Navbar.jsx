import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">
            <span className="logo-shape logo-shape-one"></span>
            <span className="logo-shape logo-shape-two"></span>
          </span>

          <span className="logo-text">TREVA</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" className="active">
            Home
          </a>

          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <div className="mobile-auth">
            <span>Already have an account?</span>
            <button className="login-btn">Login</button>
            <button className="primary-btn">Get Started</button>
          </div>
        </div>

        <div className="nav-actions">
          <span className="account-text">
            Already have an account?
          </span>

          <button className="login-btn">
            Login
          </button>

          <button className="primary-btn">
            Get Started
          </button>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
