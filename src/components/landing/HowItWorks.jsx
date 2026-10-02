const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up and create your personalized TREVA profile.",
  },
  {
    number: "02",
    title: "Explore opportunities",
    description:
      "Discover jobs, teams and opportunities that match you.",
  },
  {
    number: "03",
    title: "Apply & track",
    description:
      "Apply to opportunities and easily track your progress.",
  },
  {
    number: "04",
    title: "Get hired",
    description:
      "Connect with employers and take the next step in your career.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <div className="section-heading">
        <span className="section-label">
          HOW IT WORKS
        </span>

        <h2>
          Your journey starts here.
        </h2>

        <p>
          Getting started with TREVA is simple.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={step.number}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index !== steps.length - 1 && (
              <div className="step-line"></div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
