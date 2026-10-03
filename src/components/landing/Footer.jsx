const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="logo footer-logo">
            <span className="logo-mark">
              <span className="logo-shape logo-shape-one"></span>
              <span className="logo-shape logo-shape-two"></span>
            </span>

            <span className="logo-text">
              TREVA
            </span>
          </a>

          <p>
            Smarter HR. Brighter Futures.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>

          <div>
            <h4>Follow us</h4>

            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Twitter">
                X
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TREVA. All rights reserved.
        </p>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
