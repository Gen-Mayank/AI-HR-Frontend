import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Software Engineer",
    quote: "TREVA made my job search so much easier. The platform is simple, fast and the recommendations are actually relevant.",
  },
  {
    name: "Rohit Mehta",
    role: "Data Analyst",
    quote: "I found my current role through TREVA. The filters and job suggestions really helped me focus on the right opportunities.",
  },
  {
    name: "Priya Singh",
    role: "Product Designer",
    quote: "Great platform with genuine companies and a clean interface. Highly recommended for freshers and experienced professionals!",
  },
];

const Testimonials = () => {
  const [start, setStart] = useState(0);

  const previous = () =>
    setStart((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = () => setStart((c) => (c + 1) % testimonials.length);

  // rotate the list so the arrows cycle through the stories
  const visible = testimonials.map(
    (_, i) => testimonials[(start + i) % testimonials.length]
  );

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        {/* heading left, arrows right */}
        <div className="testimonials-head">
          <div>
            <span className="pill">SUCCESS STORIES</span>
            <h2>What our users say</h2>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-nav" onClick={previous} aria-label="Previous testimonial">
              <ArrowLeft size={16} />
            </button>
            <button className="testimonial-nav" onClick={next} aria-label="Next testimonial">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="testimonial-grid">
          {visible.map((t) => (
            <article className="testimonial-card" key={t.name}>
              <span className="quote-mark" aria-hidden="true">“</span>

              <p className="testimonial-quote">“{t.quote}”</p>

              <div className="testimonial-footer">
                <div className="testimonial-user">
                  <span className="avatar">{t.name.charAt(0)}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>

                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;