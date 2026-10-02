import whyTrevaImage from "../../assets/images/why-treva.png";

const WhyTreva = () => {
  return (
    <section className="why-treva-section" id="about">
      <div className="why-treva-container">

        <div className="why-treva-image">
          <div className="illustration-background"></div>

          <img
            src={whyTrevaImage}
            alt="Why choose TREVA"
          />
        </div>

        <div className="why-treva-content">
          <span className="section-label">
            WHY TREVA
          </span>

          <h2>
            Built for people.
            <br />
            Designed for growth.
          </h2>

          <p>
            TREVA brings job seekers, employees and HR teams
            together in one simple platform designed to make
            work better.
          </p>

          <div className="benefit-list">

            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <div>
                <h3>One connected platform</h3>
                <p>
                  Everything you need in one place.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <div>
                <h3>Simple and intuitive</h3>
                <p>
                  Designed to be easy for everyone.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-check">✓</div>
              <div>
                <h3>Built for growth</h3>
                <p>
                  Tools that help people and companies grow.
                </p>
              </div>
            </div>

          </div>

          <div className="why-stat-card">
            <div>
              <strong>120K+</strong>
              <span>Happy users</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Companies</span>
            </div>

            <div>
              <strong>95%</strong>
              <span>Satisfaction</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyTreva;
