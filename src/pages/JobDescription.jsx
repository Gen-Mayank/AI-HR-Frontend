import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JobDescription.css";
import jobIllustration1 from "../assets/Job-illustration1.jpeg";

const job = {
  title: "Backend Engineer (Django)",
  company: "AlphaTech",
  location: "Remote",
  posted: "Posted 2 days ago",
  datePosted: "Oct 2, 2026",
  experience: "Mid level (2–4 years)",
  salary: "₹8L – ₹14L / yr",
  type: "Full-time · Remote",
  match: "86% match",
  skills: ["Django", "Python", "PostgreSQL", "REST APIs", "Celery", "Docker"],
};

function Icon({ children, className = "" }) {
  return <span className={`jd-icon ${className}`}>{children}</span>;
}

function JobDescription() {
  const navigate = useNavigate();

  return (
    <div className="job-page">
      {/* Top header */}
      <header className="job-header">
        <Link to="/job-seeker" className="brand">
          <span className="brand-icon">
            <Icon>♙</Icon>
          </span>
          <span>TREVA</span>
        </Link>

        <div className="job-search">
          <Icon>⌕</Icon>
          <input
            type="text"
            placeholder="Search jobs, companies, or skills..."
            aria-label="Search jobs"
          />
        </div>

        <div className="header-actions">
          <button className="header-icon-button" aria-label="Notifications">
            <svg
              className="notification-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 14.7c-1.3 0-2.35-1.05-2.35-2.35 0-.65.27-1.24.7-1.66A3.35 3.35 0 0 1 8.5 7.85a3.5 3.5 0 0 1 6.7 0 3.35 3.35 0 0 1-1.85 2.84c.43.42.7 1.01.7 1.66A2.35 2.35 0 0 1 12 14.7Zm0-9.8a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Z"
                fill="currentColor"
              />
              <path
                d="M12 14.1v6.1M9.6 20.2h4.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.55"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="profile-divider" />
          <button className="profile-menu">
            <span className="profile-avatar">NS</span>
            <span className="profile-copy">
              <strong>XYZ</strong>
              <small>Job Seeker</small>
            </span>
            <span className="chevron">⌄</span>
          </button>
        </div>
      </header>

      <div className="job-layout">
        {/* Sidebar */}
        <aside className="job-sidebar">
          <nav>
            <Link to="/job-seeker" className="side-link">
              <span>▦</span>
              Dashboard
            </Link>

            <Link to="/jobs" className="side-link active">
              <span>▣</span>
              Browse Jobs
            </Link>

            <Link to="/saved-jobs" className="side-link">
              <span>♡</span>
              Saved Jobs
            </Link>

            <Link to="/applied-jobs" className="side-link">
              <span>➤</span>
              Applied Jobs
            </Link>

            <Link to="/profile" className="side-link">
              <span>♙</span>
              Profile
            </Link>
          </nav>

          <div className="sidebar-promo">
            <h3>Build your future<br />with TREVA</h3>
            <p>Better skills. Better jobs.<br />A brighter path.</p>
            <div className="promo-illustration">
              <img
                src={jobIllustration1}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>

          <button
            className="logout-button"
            onClick={() => navigate("/login")}
          >
            <span>⇥</span>
            Logout
          </button>
        </aside>

        {/* Main content */}
        <main className="job-main">
          <div className="breadcrumb">
            <span>BROWSE JOBS</span>
            <b>›</b>
            <strong>JOB DETAILS</strong>
          </div>

          {/* Job heading card */}
          <section className="job-title-card">
            <div className="company-letter">A</div>

            <div className="job-heading">
              <h1>{job.title}</h1>
              <div className="job-meta">
                <strong>{job.company}</strong>
                <span className="verified">✓</span>
                <span>⌖ {job.location}</span>
                <span>◷ {job.posted}</span>
                <span className="featured">Featured</span>
              </div>
            </div>

            <div className="job-title-actions">
              <button className="round-action" aria-label="Save job">
                ♡
              </button>
              <button className="round-action" aria-label="Share job">
                ⤴
              </button>
              <button className="apply-button">Apply<br />Now</button>
            </div>
          </section>

          {/* Description */}
          <section className="job-description-card">
            <h2>About the Role</h2>

            <p>
              We are looking for a Backend Engineer with 2+ years of experience
              in Django to join our growing team and build scalable web
              applications used by thousands of businesses across India.
            </p>

            <p>
              You will work closely with frontend engineers and product
              managers, own APIs from design to production, and help shape the
              architecture of our core platform.
            </p>

            <h2>Responsibilities</h2>

            <ul className="check-list">
              <li>
                <span className="check">✓</span>
                <span>Design and build clean, well-tested REST APIs using Django and Django REST Framework.</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Model data and optimize slow queries in PostgreSQL.</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Run background jobs and scheduled tasks with Celery and Redis.</span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>Containerize services with Docker and support smooth deployments.</span>
              </li>
            </ul>

            <h2>Requirements</h2>

            <ul className="requirements">
              <li>2 to 4 years of professional experience in backend development.</li>
              <li>Strong knowledge of Python, Django, and REST API design.</li>
              <li>Hands-on experience with PostgreSQL, Git, and Linux basics.</li>
              <li>Familiarity with AWS or any cloud platform is a plus.</li>
              <li>Clear communication and the ability to work in a remote, agile team.</li>
            </ul>
          </section>
        </main>

        {/* Right column */}
        <aside className="job-rightbar">
          <section className="summary-card">
            <div className="summary-heading">
              <h2>Job Summary</h2>
              <span className="match-badge">{job.match}</span>
            </div>

            <div className="summary-list">
              <div className="summary-row">
                <Icon>▣</Icon>
                <div>
                  <small>DATE POSTED</small>
                  <strong>{job.datePosted}</strong>
                </div>
              </div>

              <div className="summary-row">
                <Icon>▤</Icon>
                <div>
                  <small>EXPERIENCE LEVEL</small>
                  <strong>{job.experience}</strong>
                </div>
              </div>

              <div className="summary-row">
                <Icon>₹</Icon>
                <div>
                  <small>ANNUAL SALARY</small>
                  <strong>{job.salary}</strong>
                </div>
              </div>

              <div className="summary-row">
                <Icon>◷</Icon>
                <div>
                  <small>JOB TYPE</small>
                  <strong>{job.type}</strong>
                </div>
              </div>
            </div>

            <div className="skills-block">
              <h3>Required Skills</h3>
              <div className="skill-list">
                {job.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`skill-tag ${index < 2 ? "strong" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p>Filled skills match your targets.</p>
            </div>
          </section>

          <section className="company-card">
            <div className="company-card-heading">
              <div className="company-card-logo">A</div>
              <div>
                <h2>AlphaTech</h2>
                <p>SaaS · Product company</p>
              </div>
            </div>

            <p>
              AlphaTech builds cloud software that helps growing businesses
              manage operations, hiring, and payments in one place.
            </p>

            <div className="company-fact">♧ &nbsp;200+ Employees</div>
            <div className="company-fact">◎ &nbsp;alphatech.in</div>
          </section>

          <section className="ready-card">
            <div className="ready-icon">✧</div>
            <div>
              <h2>Ready to apply?</h2>
              <p>Your profile fits well.</p>
            </div>
            <button onClick={() => alert("Application flow coming soon.")}>
              Apply Now <span>›</span>
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default JobDescription;
