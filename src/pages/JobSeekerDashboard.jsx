import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  Heart,
  FileText,
  User,
  Briefcase,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  MapPin,
  Clock3,
  Wallet,
  Bookmark,
  Send,
  CalendarDays,
  Target,
  Pencil,
  Plus,
  Funnel,
  Code2,
  Sparkles,
} from "lucide-react";

import jobIllustration from "../assets/job-illustration.jpeg";
import jobIllustration1 from "../assets/Job-illustration1.jpeg";

import "./JobSeekerDashboard.css";

/* ------------------------------------------------------------------ */
/*  Static demo data                                                   */
/* ------------------------------------------------------------------ */

const user = { name: "XYZ", role: "Job Seeker" };

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Browse Jobs", icon: FileText },
  { label: "Saved Jobs", icon: Heart },
  { label: "Applied Jobs", icon: FileText },
  { label: "Profile", icon: User },
];

const roles = [
  "Backend + Django",
  "React",
  "DevOps",
  "Python",
  "Data Science",
  "UI/UX",
];

const jobs = [
  {
    id: 1,
    company: "AlphaTech",
    logo: "A",
    verified: true,
    title: "Backend Engineer (Django)",
    location: "Remote",
    type: "Full-time",
    experience: "2–4 yrs",
    salary: "₹8L – ₹14L / yr",
    skills: ["Django", "Python", "PostgreSQL", "REST APIs"],
    description:
      "We are looking for a Backend Engineer with 2+ years of experience in Django to join our growing team and build scalable web applications.",
    badge: "Featured",
    roles: ["Backend + Django", "Python"],
  },
  {
    id: 2,
    company: "Horizon Labs",
    logo: "H",
    verified: true,
    title: "Python Backend Developer",
    location: "Bengaluru, KA",
    type: "Full-time",
    experience: "1–3 yrs",
    salary: "₹6L – ₹10L / yr",
    skills: ["Python", "Django", "FastAPI", "Docker"],
    description:
      "Join our backend team to develop high-performance APIs and work on next-gen web applications using Django and FastAPI.",
    badge: "New",
    roles: ["Backend + Django", "Python"],
  },
  {
    id: 3,
    company: "NextGen Solutions",
    logo: "N",
    verified: true,
    title: "Software Engineer (Backend)",
    location: "Hyderabad, TG",
    type: "Full-time",
    experience: "2–5 yrs",
    salary: "₹10L – ₹16L / yr",
    skills: ["Django", "Python", "AWS", "Linux"],
    description:
      "We are hiring a Backend Engineer to design and develop scalable services using Django and cloud technologies.",
    badge: "New",
    roles: ["Backend + Django", "Python", "DevOps"],
  },
];

const savedJobs = [
  { logo: "A", title: "Backend Engineer", company: "AlphaTech", location: "Remote" },
  { logo: "P", title: "Full Stack Developer", company: "PixelForge", location: "Bengaluru" },
  { logo: "C", title: "Python Developer", company: "CloudWorks", location: "Noida" },
];

const appliedJobs = [
  { logo: "A", title: "Backend Engineer", company: "AlphaTech", time: "2 days ago", status: "Under Review" },
  { logo: "P", title: "Python Developer", company: "CloudWorks", time: "4 days ago", status: "Interview" },
  { logo: "P", title: "Full Stack Developer", company: "PixelForge", time: "6 days ago", status: "Shortlisted" },
];

const defaultFilters = {
  search: "",
  location: "",
  type: "",
  experience: "",
};

const statusClass = (status) => status.toLowerCase().replace(/\s+/g, "-");

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function JobSeekerDashboard() {
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedRole, setSelectedRole] = useState("Backend + Django");
  const [savedIds, setSavedIds] = useState([1]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(roles);
  const [appliedIds, setAppliedIds] = useState([2, 3]);

  const applyToJob = (id) => {
    setAppliedIds((current) => current.includes(id) ? current : [...current, id]);
  };

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const toggleSaved = (id) => {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  };

  const filteredJobs = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return jobs.filter((job) => {
      const searchable = `${job.company} ${job.title} ${job.skills.join(" ")}`.toLowerCase();
      const matchesSearch = !query || searchable.includes(query);
      const matchesLocation =
        !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType =
        !filters.type || job.type.toLowerCase().includes(filters.type.toLowerCase());
      const matchesExperience =
        !filters.experience || job.experience.includes(filters.experience);
      const matchesRole = !selectedRole || job.roles.includes(selectedRole);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesExperience &&
        matchesRole
      );
    });
  }, [filters, selectedRole]);

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const appliedJobList = jobs.filter((job) => appliedIds.includes(job.id));

  const addSkill = () => {
    if (!selectedSkills.includes("Cloud")) {
      setSelectedSkills((current) => [...current, "Cloud"]);
    }
  };

  return (
    <div className="jobseeker-dashboard">
      <div className="jobseeker-shell">
        {/* ---------------------------------------------------------- */}
        {/* Top bar                                                      */}
        {/* ---------------------------------------------------------- */}
        <header className="jobseeker-topbar">
          <div className="jobseeker-logo" aria-label="Treva">
            <LogoMark />
            <span>TREVA</span>
          </div>

          <div className="jobseeker-global-search">
            <Search size={17} />
            <input
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              placeholder="Search jobs, companies, or skills..."
            />
          </div>

          <div className="jobseeker-topbar-right">
            <button className="jobseeker-bell" aria-label="Notifications">
              <Bell size={19} />
              <span className="jobseeker-bell-dot" />
            </button>

            <div className="jobseeker-user">
              <div className="jobseeker-user-avatar">NS</div>
              <div className="jobseeker-user-text">
                <strong>{user.name}</strong>
                <span>{user.role}</span>
              </div>
              <ChevronDown size={15} />
            </div>
          </div>
        </header>

        <div className="jobseeker-body">
          {/* -------------------------------------------------------- */}
          {/* Sidebar                                                    */}
          {/* -------------------------------------------------------- */}
          <aside className="jobseeker-sidebar">
            <nav className="jobseeker-nav">
              {navItems.map(({ label, icon: Icon }, index) => (
                <button
                  className={`jobseeker-nav-item ${index === 0 ? "active" : ""}`}
                  key={label}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <div className="jobseeker-promo">
              <h3>Build your future<br />with TREVA</h3>
              <p>Better skills. Better jobs.<br />A brighter you.</p>
              <PromoIllustration />
            </div>

            <button className="jobseeker-logout">
              <LogOut size={17} />
              <span>Logout</span>
            </button>
          </aside>

          {/* -------------------------------------------------------- */}
          {/* Main content                                                */}
          {/* -------------------------------------------------------- */}
          <main className="jobseeker-main">
            <div className="jobseeker-columns">
              <div className="jobseeker-content">
                {/* Welcome banner */}
                <section className="jobseeker-welcome jobseeker-card">
                  <div>
                    <span>Good morning,</span>
                    <h1>XYZ!</h1>
                    <p>
                      Explore jobs, build your skills and take the next step in your career.
                    </p>
                  </div>
                  <WelcomeIllustration />
                </section>

                {/* Target skills */}
                <section className="jobseeker-skills-card jobseeker-card">
                  <div className="jobseeker-section-head">
                    <div>
                      <h2>Target Skills</h2>
                      <p>
                        Select the skills you want to focus on. We'll show you relevant opportunities.
                      </p>
                    </div>
                    <button className="jobseeker-edit">
                      <Pencil size={13} />
                      Edit Skills
                    </button>
                  </div>

                  <div className="jobseeker-skills">
                    {selectedSkills.map((skill) => (
                      <button
                        key={skill}
                        className={`jobseeker-skill ${selectedRole === skill ? "selected" : ""}`}
                        onClick={() => setSelectedRole(skill)}
                      >
                        {skill === "Backend + Django" && <Code2 size={13} />}
                        {skill}
                      </button>
                    ))}
                    <button className="jobseeker-add-skill" onClick={addSkill}>
                      <Plus size={14} />
                      Add more
                    </button>
                  </div>
                </section>

                {/* Filters */}
                <section className="jobseeker-filter-card jobseeker-card">
                  <div className="jobseeker-filter-search">
                    <Search size={16} />
                    <input
                      value={filters.search}
                      onChange={(e) => updateFilter("search", e.target.value)}
                      placeholder="Search jobs, companies..."
                    />
                  </div>

                  <select
                    value={filters.location}
                    onChange={(e) => updateFilter("location", e.target.value)}
                  >
                    <option value="">Location</option>
                    <option value="Remote">Remote</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Noida">Noida</option>
                  </select>

                  <select
                    value={filters.type}
                    onChange={(e) => updateFilter("type", e.target.value)}
                  >
                    <option value="">Job Type</option>
                    <option value="Full-time">Full-time</option>
                  </select>

                  <select
                    value={filters.experience}
                    onChange={(e) => updateFilter("experience", e.target.value)}
                  >
                    <option value="">Experience</option>
                    <option value="1–3">1–3 yrs</option>
                    <option value="2–4">2–4 yrs</option>
                    <option value="2–5">2–5 yrs</option>
                  </select>

                  <button
                    className={`jobseeker-filter-button ${showFilters ? "active" : ""}`}
                    onClick={() => setShowFilters((value) => !value)}
                  >
                    <Funnel size={14} />
                    Apply Filters
                  </button>
                </section>

                {showFilters && (
                  <div className="jobseeker-filter-tools">
                    <span>Filters are active on the recommended jobs below.</span>
                    <button onClick={clearFilters}>Clear all</button>
                  </div>
                )}

                {/* Recommended jobs */}
                <section className="jobseeker-recommended">
                  <div className="jobseeker-list-head">
                    <div>
                      <h2>Recommended Jobs</h2>
                      <span>{filteredJobs.length} jobs found for your selected skills</span>
                    </div>
                    <button className="jobseeker-sort">
                      Most Relevant
                      <ChevronDown size={14} />
                    </button>
                  </div>

                  <div className="jobseeker-job-list">
                    {filteredJobs.map((job) => (
                      <article className="jobseeker-job-card jobseeker-card" key={job.id}>
                        <div className="jobseeker-company-logo">{job.logo}</div>

                        <div className="jobseeker-job-content">
                          <div className="jobseeker-company">
                            <span>{job.company}</span>
                            {job.verified && <span className="jobseeker-verified">✓</span>}
                          </div>

                          <h3>{job.title}</h3>

                          <ul className="jobseeker-job-meta">
                            <li><MapPin size={13} /> {job.location}</li>
                            <li><Briefcase size={13} /> {job.type}</li>
                            <li><Clock3 size={13} /> {job.experience}</li>
                            <li><Wallet size={13} /> {job.salary}</li>
                          </ul>

                          <div className="jobseeker-job-skills">
                            {job.skills.map((skill) => <span key={skill}>{skill}</span>)}
                          </div>

                          <p>{job.description}</p>
                        </div>

                        <div className="jobseeker-job-actions">
                          <div className="jobseeker-job-top-actions">
                            {job.badge && (
                              <span className={`jobseeker-job-badge ${job.badge === "New" ? "new" : "featured"}`}>
                                {job.badge}
                              </span>
                            )}
                            <button
                              className={`jobseeker-heart ${savedIds.includes(job.id) ? "saved" : ""}`}
                              onClick={() => toggleSaved(job.id)}
                              aria-label="Save job"
                            >
                              <Heart size={18} />
                            </button>
                          </div>

                          <div className="jobseeker-action-row">
                            <button className="jobseeker-details-button">
                              View Details
                              <ChevronRight size={15} />
                            </button>
                            <button
                              className={`jobseeker-apply-button ${appliedIds.includes(job.id) ? "applied" : ""}`}
                              onClick={() => applyToJob(job.id)}
                              disabled={appliedIds.includes(job.id)}
                            >
                              {appliedIds.includes(job.id) ? "Applied" : "Apply Now"}
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}

                    {filteredJobs.length === 0 && (
                      <div className="jobseeker-empty jobseeker-card">
                        No jobs found for the selected filters.
                      </div>
                    )}
                  </div>
                </section>
              </div>

              {/* ------------------------------------------------------ */}
              {/* Right column                                            */}
              {/* ------------------------------------------------------ */}
              <aside className="jobseeker-right">
                <section className="jobseeker-progress jobseeker-card">
                  <SideHeading title="Your Progress" />

                  <div className="jobseeker-progress-grid">
                    <ProgressItem icon={Bookmark} value="12" label="Saved Jobs" />
                    <ProgressItem icon={Send} value={String(appliedIds.length + 5)} label="Applied Jobs" />
                    <ProgressItem icon={CalendarDays} value="3" label="Interviews" />
                    <ProgressItem icon={Target} value="86%" label="Match Rate" />
                  </div>
                </section>

                <section className="jobseeker-side-list jobseeker-card">
                  <SideHeading title="Saved Jobs" />
                  {savedJobs.map((job) => (
                    <div className="jobseeker-mini-job" key={job.title}>
                      <div className="jobseeker-mini-logo">{job.logo}</div>
                      <div>
                        <strong>{job.title}</strong>
                        <span>{job.company} · {job.location}</span>
                      </div>
                      <Bookmark size={15} />
                    </div>
                  ))}
                </section>

                <section className="jobseeker-side-list jobseeker-card">
                  <SideHeading title="Applied Jobs" />
                  {appliedJobs.map((job) => (
                    <div className="jobseeker-mini-job applied" key={job.title}>
                      <div className="jobseeker-mini-logo">{job.logo}</div>
                      <div>
                        <strong>{job.title}</strong>
                        <span>{job.company} · {job.time}</span>
                      </div>
                      <span className={`jobseeker-status ${statusClass(job.status)}`}>
                        {job.status}
                      </span>
                    </div>
                  ))}

                  {appliedJobList.map((job) => (
                    <div className="jobseeker-mini-job applied" key={`live-${job.id}`}>
                      <div className="jobseeker-mini-logo">{job.logo}</div>
                      <div>
                        <strong>{job.title}</strong>
                        <span>{job.company} · just now</span>
                      </div>
                      <span className="jobseeker-status under-review">Under Review</span>
                    </div>
                  ))}
                </section>

                <section className="jobseeker-cta">
                  <div className="jobseeker-cta-icon">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3>Keep going, you're doing great!</h3>
                    <p>Your next opportunity is just a click away.</p>
                  </div>
                  <button>
                    Explore More Jobs
                    <ChevronRight size={14} />
                  </button>
                </section>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function SideHeading({ title }) {
  return (
    <div className="jobseeker-side-heading">
      <h2>{title}</h2>
      <button>
        View All
        <ChevronRight size={13} />
      </button>
    </div>
  );
}

function ProgressItem({ icon: Icon, value, label }) {
  return (
    <div className="jobseeker-progress-item">
      <Icon size={18} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 34 34" width="31" height="31" aria-hidden="true">
      <defs>
        <linearGradient id="jobseeker-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7048ed" />
          <stop offset="1" stopColor="#5130d2" />
        </linearGradient>
      </defs>
      <circle cx="17" cy="10" r="6" fill="url(#jobseeker-logo-grad)" />
      <path
        d="M7 27c1.8-6.5 5.1-9.3 10-9.3S25.2 20.5 27 27c.5 1.8-.8 3-2.7 3H9.7C7.8 30 6.5 28.8 7 27Z"
        fill="url(#jobseeker-logo-grad)"
      />
    </svg>
  );
}

function WelcomeIllustration() {
  return (
    <div className="jobseeker-welcome-illustration" aria-hidden="true">
      <img
        src={jobIllustration}
        alt=""
        className="jobseeker-welcome-image"
      />
    </div>
  );
}

function PromoIllustration() {
  return (
    <div className="jobseeker-promo-illustration" aria-hidden="true">
      <img
        src={jobIllustration1}
        alt=""
        className="jobseeker-promo-image"
      />
    </div>
  );
}

export default JobSeekerDashboard;
