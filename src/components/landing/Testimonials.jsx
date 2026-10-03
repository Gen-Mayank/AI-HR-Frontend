import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager",
    quote:
      "TREVA has made managing our entire HR process much simpler. Our team can finally focus on what matters.",
  },
  {
    name: "Michael Davis",
    role: "Software Engineer",
    quote:
      "Finding the right opportunity became much easier. TREVA helped me discover a role that matched my goals.",
  },
  {
    name: "Priya Sharma",
    role: "Talent Specialist",
    quote:
      "The platform is simple, modern and incredibly useful for connecting great people with great companies.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <span className="section-label">
          SUCCESS STORIES
        </span>

        <h2>
          People love TREVA.
        </h2>

        <p>
          See how TREVA helps people move forward.
        </p>
      </div>

      <div className="testimonial-wrapper">

        <button
          className="testimonial-nav"
          onClick={previous}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card ${
                index === active ? "testimonial-active" : ""
              }`}
              key={testimonial.name}
            >
              <div className="stars">
                ★★★★★
              </div>

              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>

              <div className="testimonial-user">
                <div className="avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="testimonial-nav"
          onClick={next}
          aria-label="Next testimonial"
        >
          →
        </button>

      </div>
    </section>
  );
};

export default Testimonials;
