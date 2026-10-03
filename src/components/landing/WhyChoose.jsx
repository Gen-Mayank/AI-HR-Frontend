const features = [
  {
    icon: "⌕",
    title: "Find Jobs",
    description:
      "Explore opportunities that match your skills and goals.",
  },
  {
    icon: "👥",
    title: "HR",
    description:
      "Hire the best talent and build strong teams.",
  },
  {
    icon: "●",
    title: "Employee",
    description:
      "Track growth, manage leaves and stay connected.",
  },
  {
    icon: "▣",
    title: "Easy Management",
    description:
      "Simplify HR tasks with smart tools and automation.",
  },
  {
    icon: "▥",
    title: "Data Driven Insights",
    description:
      "Make better decisions with real-time analytics.",
  },
  {
    icon: "♢",
    title: "Secure & Reliable",
    description:
      "Your data and privacy are always protected.",
  },
];

const stats = [
  {
    number: "50K+",
    label: "Active Job Listings",
  },
  {
    number: "10K+",
    label: "Companies",
  },
  {
    number: "120K+",
    label: "Happy Users",
  },
  {
    number: "95%",
    label: "Satisfaction Rate",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-section" id="features">
      <div className="why-container">

        <div className="why-intro">
          <span className="section-label">
            WHY CHOOSE TREVA
          </span>

          <h2>
            Everything you need
            <br />
            in one place.
          </h2>

          <p>
            From finding the right job to managing your team,
            TREVA simplifies HR processes and creates better
            opportunities for everyone.
          </p>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.number}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
