import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/authService";

import signupIllustration from "../assets/signup-illustration.jpeg";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) setError("");
  };

  const validate = () => {
    const { fullName, email, role, password, confirmPassword, terms } = formData;

    if (!fullName.trim() || !email.trim() || !role || !password) {
      return "Please fill in all the fields.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    if (!terms) {
      return "Please accept the Terms & Conditions.";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = validate();
    if (message) {
      setError(message);
      return;
    }

    try {
  setLoading(true);

  const nameParts = formData.fullName.trim().split(/\s+/);

  const roleMap = {
    "job-seeker": "JOB_SEEKER",
    employee: "EMPLOYEE",
    hr: "HR",
  };

  await signup({
    first_name: nameParts[0],
    last_name: nameParts.slice(1).join(" "),
    email: formData.email,
    password: formData.password,
    role: roleMap[formData.role],
  });

  navigate("/login");
} catch (error) {
  setError(
    error.response?.data?.email?.[0] ||
    error.response?.data?.detail ||
    "Sign up failed. Please try again."
  );
} finally {
  setLoading(false);
}
  };

  return (
    <main className="signup-page">
      <section className="signup-card">
        <div className="signup-visual">
          <img src={signupIllustration} alt="Create your TREVA account" />
        </div>

        <div className="signup-panel">
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <h1>
              Hello,
              <br />
              Join TREVA today
            </h1>

            <label className="signup-field">
              <span className="signup-sr-only">Full name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </label>

            <label className="signup-field">
              <span className="signup-sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className="signup-field">
              <span className="signup-sr-only">I am a</span>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={formData.role ? "has-value" : ""}
              >
                <option value="" disabled>
                  I am a...
                </option>
                <option value="job-seeker">Job Seeker</option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
              </select>
            </label>

            <label className="signup-field">
              <span className="signup-sr-only">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            <label className="signup-field">
              <span className="signup-sr-only">Confirm password</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>

            <label className="signup-terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <span>
                I agree to the <a href="#terms">Terms &amp; Conditions</a>
              </span>
            </label>

            {error && (
              <p className="signup-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="signup-submit" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </button>

            <p className="signup-login">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Signup;