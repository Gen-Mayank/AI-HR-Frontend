import { useMemo, useState } from "react";
import "./ApplicationPage.css";
import ApplicationSent from "./ApplicationSent";

const defaultSkills = ["Django", "Python", "PostgreSQL", "REST APIs", "Docker"];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    back: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
    user: <><circle cx="12" cy="8" r="3" /><path d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /><path d="M10 12v2h4v-2" /></>,
    upload: <><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M5 20h14" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export default function Application({
  jobTitle = "Senior Frontend Engineer",
  company = "Stripe",
  jobMeta = "Remote · Full-time",
  onBack,
  onSubmit,
}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    experience: "",
    company: "",
    notice: "",
    currentCtc: "",
    expectedCtc: "",
    workPreference: "Remote",
    coverNote: "",
    consent: false,
    resume: null,
  });

  const [skills, setSkills] = useState(defaultSkills);
  const [skillInput, setSkillInput] = useState("");
  const [showApplicationSent, setShowApplicationSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const addSkill = () => {
    const skill = skillInput.trim();
    if (!skill) return;
    if (!skills.some((item) => item.toLowerCase() === skill.toLowerCase())) {
      setSkills((prev) => [...prev, skill]);
    }
    setSkillInput("");
  };

  const removeSkill = (skill) => {
    setSkills((prev) => prev.filter((item) => item !== skill));
  };

  const handleResume = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("Please choose a file up to 10 MB.");
      return;
    }
    update("resume", file);
  };

  const coverCount = useMemo(() => form.coverNote.length, [form.coverNote]);

  const validateForm = () => {
    const newErrors = {};

  // Full Name
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z\s]{2,50}$/.test(form.fullName.trim())) {
     newErrors.fullName = "Enter a valid full name";
    }

  // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        form.email.trim()
      )
    ) {
      newErrors.email = "Enter a valid email address";
    }

  // Phone Number
    let phone = form.phone.replace(/\D/g, "");

  // If user enters +91XXXXXXXXXX, remove 91
    if (phone.length === 12 && phone.startsWith("91")) {
      phone = phone.slice(2);
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

  // Current Location
    if (!form.location.trim()) {
      newErrors.location = "Current location is required";
    }

  // GitHub / Portfolio
  if (!form.github.trim()) {
    newErrors.github = "GitHub / Portfolio link is required";
  } else if (
    !/^https?:\/\/(www\.)?github\.com\/.+/i.test(form.github.trim())
  ) {
    newErrors.github = "Enter a valid GitHub URL";
  }

  // Total Experience
  if (!form.experience) {
    newErrors.experience = "Please select your experience";
  }

  // Notice Period
  if (!form.notice) {
    newErrors.notice = "Please select your notice period";
  }

  // Current CTC
  const currentCtc = form.currentCtc.replace(/,/g, "").trim();

  if (!currentCtc) {
    newErrors.currentCtc = "Current CTC is required";
  } else if (!/^\d+$/.test(currentCtc)) {
    newErrors.currentCtc = "Enter a valid CTC";
  }

  // Expected CTC
  const expectedCtc = form.expectedCtc.replace(/,/g, "").trim();

  if (!expectedCtc) {
    newErrors.expectedCtc = "Expected CTC is required";
  } else if (!/^\d+$/.test(expectedCtc)) {
    newErrors.expectedCtc = "Enter a valid CTC";
  }

  // Expected CTC should not be less than Current CTC
  if (
    currentCtc &&
    expectedCtc &&
    /^\d+$/.test(currentCtc) &&
    /^\d+$/.test(expectedCtc) &&
    Number(expectedCtc) < Number(currentCtc)
  ) {
    newErrors.expectedCtc =
      "Expected CTC cannot be less than current CTC";
  }

  // Resume
  if (!form.resume) {
    newErrors.resume = "Please upload your resume";
  } else {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const fileName = form.resume.name.toLowerCase();

    const validExtension =
      fileName.endsWith(".pdf") ||
      fileName.endsWith(".doc") ||
      fileName.endsWith(".docx");

    if (
      !allowedTypes.includes(form.resume.type) &&
      !validExtension
    ) {
      newErrors.resume = "Only PDF, DOC or DOCX files are allowed";
    }

    if (form.resume.size > 10 * 1024 * 1024) {
      newErrors.resume = "Resume must be smaller than 10MB";
    }
  }

  // Cover Note
  if (!form.coverNote.trim()) {
    newErrors.coverNote = "Cover note is required";
  } else if (form.coverNote.trim().length < 20) {
    newErrors.coverNote =
      "Cover note must contain at least 20 characters";
  }

  // Consent
  if (!form.consent) {
    newErrors.consent =
      "Please confirm the details and agree to the Terms and Privacy Policy";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (event) => {
    event.preventDefault();

    // First validate EVERYTHING
    const isValid = validateForm();

    // If anything is wrong, STOP here
    if (!isValid) {
      return;
    }

  // Only after every check passes:
    onSubmit?.({ ...form, skills });

  // Show success popup
    setShowApplicationSent(true);
  };

  return (
    <div className="application-page">
      <div className="application-shell">
        <div className="application-breadcrumb">
          <button className="back-button" type="button" onClick={onBack}>
            <Icon name="back" size={16} />
            <span>Back</span>
          </button>

          <div className="breadcrumb-text">
            <span>Browse Jobs</span>
            <span className="breadcrumb-chevron">›</span>
            <strong>Job Details</strong>
          </div>
        </div>

        <main className="application-card">
          <header className="application-header">
            <h1>
              Application for <span>{company}</span>
            </h1>
            <p>
              {jobTitle} <span>·</span> {jobMeta}
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <SectionHeader icon="user" title="Personal details" />

            <div className="form-grid">
              <Field
                label="Full Name"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="Your full name"
                error={errors.fullName}
              />
              <Field
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                error={errors.email}
              />
              <Field
                label="Phone Number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+91   98765 43210"
                error={errors.phone}
              />
              <Field
                label="Current Location"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="City, State"
                error={errors.location}
              />
              <Field
                label="GitHub / Portfolio Link"
                value={form.github}
                onChange={(e) => update("github", e.target.value)}
                placeholder="https://github.com/yourname"
                error={errors.github}
              />
              <Field
                label="LinkedIn Profile"
                optional
                value={form.linkedin}
                onChange={(e) => update("linkedin", e.target.value)}
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>

            <SectionHeader icon="briefcase" title="Professional details" />

            <div className="form-grid">
              <SelectField
                label="Total Experience"
                value={form.experience}
                onChange={(e) => update("experience", e.target.value)}
                options={["Select years", "Fresher", "1 year", "2 years", "3 years", "4+ years"]}
                error={errors.experience}
              />

              <Field
                label="Current Company"
                optional
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Where do you work now?"
              />

              <SelectField
                label="Notice Period"
                value={form.notice}
                onChange={(e) => update("notice", e.target.value)}
                options={["Select notice period", "Immediate", "15 days", "30 days", "60 days", "90 days"]}
                error={errors.notice}
              />

              <Field
                label="Current CTC (per year)"
                prefix="₹"
                value={form.currentCtc}
                onChange={(e) => update("currentCtc", e.target.value)}
                placeholder="e.g. 6,00,000"
                error={errors.currentCtc}
              />

              <Field
                label="Expected CTC (per year)"
                prefix="₹"
                value={form.expectedCtc}
                onChange={(e) => update("expectedCtc", e.target.value)}
                placeholder="e.g. 10,00,000"
                error={errors.expectedCtc}
              />

              <div className="field work-preference">
                <label>Work Preference</label>
                <div className="preference-group">
                  {["Remote", "Hybrid", "On-site"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={form.workPreference === option ? "preference active" : "preference"}
                      onClick={() => update("workPreference", option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field full-width skills-field">
                <label>Key Skills</label>
                <div className="skills-box">
                  {skills.map((skill) => (
                    <button
                      className="skill-chip"
                      type="button"
                      key={skill}
                      title={`Remove ${skill}`}
                      onClick={() => removeSkill(skill)}
                    >
                      {skill}
                    </button>
                  ))}

                  <div className="skill-input-wrap">
                    <span className="skill-plus"><Icon name="plus" size={14} /></span>
                    <input
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addSkill();
                        }
                      }}
                      onBlur={addSkill}
                      placeholder="Add a skill"
                      aria-label="Add a skill"
                    />
                  </div>
                </div>
              </div>
            </div>

            <SectionHeader icon="upload" title="Resume and cover note" />

            <div className="resume-grid">
              <div className="field">
                <label>Resume / CV</label>
                <label className="upload-box" htmlFor="resume-upload">
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResume}
                  />
                  <span className="upload-icon"><Icon name="upload" size={23} /></span>
                  {form.resume ? (
                    <>
                      <strong>{form.resume.name}</strong>
                      <small>Click to replace · up to 10MB</small>
                    </>
                  ) : (
                    <>
                      <strong>Click to upload or drag and drop</strong>
                      <small>PDF, DOC, DOCX up to 10MB</small>
                    </>
                  )}
                </label>
                {errors.resume && (
                  <span className="field-error">
                    {errors.resume}
                  </span>
                )}
              </div>

              <div className="field cover-field">
                <label>Why are you a good fit for this role?</label>
                <div className="cover-wrap">
                  <textarea
                    maxLength={500}
                    value={form.coverNote}
                    onChange={(e) => update("coverNote", e.target.value)}
                    placeholder="Briefly describe your Django experience and why this role interests you..."
                  />
                  <span>{coverCount} / 500</span>
                </div>
                  {errors.coverNote && (
                    <span className="field-error">
                      {errors.coverNote}
                    </span>
                  )}
              </div>
            </div>

            <label className="consent-row">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
              />
              <span className="fake-checkbox"><Icon name="check" size={13} /></span>
              <span>
                I confirm the details above are correct and agree to TREVA's{" "}
                <a href="/terms" onClick={(e) => e.stopPropagation()}>Terms of Service</a>
                {" "}and{" "}
                <a href="/privacy" onClick={(e) => e.stopPropagation()}>Privacy Policy</a>.
              </span>
            </label>
            {errors.consent && (
              <span className="field-error consent-error">
                {errors.consent}
              </span>
            )}

            <button
              className="submit-button"
              type="submit"
            >
              Submit Application
            </button>
            
          </form>
        </main>
           </div>

      {showApplicationSent && (
        <ApplicationSent
          jobTitle={jobTitle}
          company={company}
          onReturnDashboard={() => {
            // Put your dashboard navigation here
            // Example:
            // navigate("/job-seeker-dashboard");
          }}
          onViewApplications={() => {
            // Put your applications navigation here
            // Example:
            // navigate("/my-applications");
          }}
        />
      )}
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      <span className="section-icon"><Icon name={icon} size={16} /></span>
      <h2>{title}</h2>
      <span className="section-line" />
    </div>
  );
}

function Field({
  label,
  optional,
  prefix,
  error,
  ...props
}) {
  return (
    <div className="field">
      <label>
        {label}
        {optional && <span className="optional">Optional</span>}
      </label>

      <div className={prefix ? "input-with-prefix" : undefined}>
        {prefix && <span>{prefix}</span>}

        <input
          {...props}
          className={error ? "input-error" : ""}
        />
      </div>

      {error && (
        <span className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}

function SelectField({
  label,
  options,
  error,
  ...props
}) {
  return (
    <div className="field">
      <label>{label}</label>

      <div className={`select-wrap ${error ? "input-error" : ""}`}>
        <select {...props}>
          {options.map((option) => (
            <option
              key={option}
              value={option === options[0] ? "" : option}
            >
              {option}
            </option>
          ))}
        </select>

        <Icon name="chevron" size={16} />
      </div>

      {error && (
        <span className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}