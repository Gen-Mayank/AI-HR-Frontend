import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-badge">
            Smarter HR. Brighter Futures.
          </span>

          <h1>
            Find the right
            <br />
            opportunities, build
            <br />
            your tomorrow.
          </h1>

          <p>
            Connect with trusted employers, manage your career,
            and grow with us. Whether you're a job seeker, recruiter,
            or employee — TREVA is your all-in-one HR platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn hero-btn">
              Find Jobs
              <span>→</span>
            </button>

            <button className="secondary-btn hero-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow"></div>

          <img
            src={heroImage}
            alt="TREVA HR platform"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
