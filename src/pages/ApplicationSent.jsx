import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Check, Bell, Mail } from "lucide-react";

import "./ApplicationSent.css";

/**
 * "Application Sent" pop-up.
 *
 * Render it on top of the Application page after the form is submitted.
 * The overlay blurs everything behind it.
 *
 * Props
 *  - jobTitle          job the person applied for
 *  - company           company name
 *  - dashboardPath     where "Return to Dashboard" goes   (default "/job-seeker")
 *  - applicationsPath  where "View My Applications" goes  (default "/job-seeker")
 *  - onClose           optional, called before navigating or when Esc is pressed
 */
function ApplicationSent({
  jobTitle = "Senior Frontend Engineer",
  company = "Stripe",
  dashboardPath = "/job-seeker",
  applicationsPath = "/job-seeker",
  onClose,
}) {
  const navigate = useNavigate();
  const primaryRef = useRef(null);

  // lock page scroll while the pop-up is open, focus the main button
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primaryRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const goTo = (path) => {
    onClose?.();
    navigate(path);
  };

  return createPortal(
    <div className="as-overlay">
      <div
        className="as-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="as-title"
      >
        <div className="as-check" aria-hidden="true">
          <Check size={40} strokeWidth={2.6} />
        </div>

        <h1 id="as-title">Application Sent!</h1>

        <p className="as-text">
          Your application for <strong>{jobTitle}</strong> at{" "}
          <strong>{company}</strong> has been successfully submitted.
        </p>

        <div className="as-next">
          <h2>What's next?</h2>

          <ul>
            <li>
              <span className="as-next-icon">
                <Bell size={12} strokeWidth={2} />
              </span>
              <p>You'll receive a confirmation email shortly.</p>
            </li>
            <li>
              <span className="as-next-icon">
                <Mail size={12} strokeWidth={2} />
              </span>
              <p>
                The hiring team will review your profile and reach out via Treva
                messages.
              </p>
            </li>
          </ul>
        </div>

        <button
          ref={primaryRef}
          type="button"
          className="as-btn as-btn-primary"
          onClick={() => goTo(dashboardPath)}
        >
          Return to Dashboard
        </button>

        <button
          type="button"
          className="as-btn as-btn-secondary"
          onClick={() => goTo(applicationsPath)}
        >
          View My Applications
        </button>
      </div>
    </div>,
    document.body
  );
}

export default ApplicationSent;
