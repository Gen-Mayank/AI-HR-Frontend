import { UserPlus, FileSearch, Send, Briefcase, ArrowRight } from "lucide-react";

const steps = [
  { number: "01", icon: UserPlus,   title: "Create your account",   description: "Sign up as a job seeker with your basic details." },
  { number: "02", icon: FileSearch, title: "Explore opportunities", description: "Browse jobs, filter by industry, location and skills." },
  { number: "03", icon: Send,       title: "Apply & track",         description: "Apply to your favourite jobs and track your progress in real-time." },
  { number: "04", icon: Briefcase,  title: "Get hired",             description: "Prepare, appear and land your dream job!" },
];

const HowItWorks = () => {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        <div className="how-intro">
          <span className="pill">HOW IT WORKS</span>
          <h2>Simple steps<br />to get started.</h2>
          <p>
            Getting started with TREVA is quick and easy. Just follow these
            simple steps and you'll be on your way to your next opportunity.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="step-item" key={step.number}>
                <div className="step-card">
                  <span className="step-number">{step.number}</span>
                  <span className="step-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {index !== steps.length - 1 && (
                  <span className="step-arrow" aria-hidden="true">
                    <ArrowRight size={14} />
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;