import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta-wrap">
      <div className="cta-section">
        <Sparkles className="cta-spark" size={40} strokeWidth={1.4} aria-hidden="true" />

        <h2>
          Your next opportunity
          <br />
          is just a click away.
        </h2>

        <p>
          Join thousands of professionals who
          <br />
          have already found their dream jobs with TREVA.
        </p>

        <button className="cta-button">
          Get Started
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
};

export default CTA;
