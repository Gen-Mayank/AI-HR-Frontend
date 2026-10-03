const LinkedIn = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05v5.9h-4v-5.23c0-1.25-.02-2.86-1.75-2.86-1.75 0-2.02 1.37-2.02 2.77v5.32h-4V9.75Z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);

const Instagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YouTube = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      {/* one row: logo | links | social icons */}
      <div className="footer-main">
        <a href="#home" className="logo footer-logo">
          <span className="logo-mark">
            <span className="logo-shape logo-shape-one"></span>
            <span className="logo-shape logo-shape-two"></span>
          </span>
          <span className="logo-text">TREVA</span>
        </a>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="social-links">
          <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
          <a href="#" aria-label="X"><XIcon /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="YouTube"><YouTube /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TREVA. All rights reserved.</p>
        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;