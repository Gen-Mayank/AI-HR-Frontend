import whyTrevaImage from "../../assets/job-finder-2.jpg";
import {
  Target, ShieldCheck, TrendingUp, MessageSquare,
  User, Building2, Star, MapPin,
} from "lucide-react";

const benefits = [
  { icon: Target,        title: "Personalized Matches", description: "Get job recommendations based on your skills and goals." },
  { icon: ShieldCheck,   title: "Trusted Employers",    description: "Work with verified companies and secure opportunities." },
  { icon: TrendingUp,    title: "Skill Development",    description: "Access resources to upgrade your skills and stay ahead." },
  { icon: MessageSquare, title: "24/7 Support",         description: "Our team is always here to help you." },
];

const stats = [
  { icon: User,      value: "50K+", label: "Active Job Seekers" },
  { icon: Building2, value: "10K+", label: "Companies Hiring" },
  { icon: Star,      value: "95%",  label: "Satisfaction Rate" },
  { icon: MapPin,    value: "100+", label: "Cities Covered" },
];

const WhyTreva = () => {
  return (
    <section className="why-treva-section" id="about">
      <div className="why-treva-container">

        {/* LEFT: illustration */}
        <div className="why-treva-image">
          <img src={whyTrevaImage} alt="Why choose TREVA" className="why-illustration" />
        </div>

        {/* MIDDLE: text + 2x2 benefits */}
        <div className="why-treva-content">
          <span className="pill">WHY TREVA</span>

          <h2>
            More than just a job portal.
            <br />
            Your career partner.
          </h2>

          <p className="why-lead">
            We combine smart technology with human insight to help you find the
            right opportunities, build your skills, and grow your career — all
            in one place.
          </p>

          <div className="benefit-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div className="benefit-item" key={benefit.title}>
                  <span className="benefit-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: trusted-by card */}
        <aside className="trust-card">
          <p className="trust-title">
            Trusted by
            <br />
            job seekers across India
          </p>

          <ul>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <li key={stat.label}>
                  <span className="trust-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>

      </div>
    </section>
  );
};

export default WhyTreva;