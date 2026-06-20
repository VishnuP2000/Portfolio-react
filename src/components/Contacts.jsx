import { motion as Motion } from "framer-motion";
import { containerVariants, itemVariants, cardVariants } from "../motionVariants";
import "./Contacts.css";

function Contacts() {
  return (
    <Motion.section
      className="page-section page-gradient contact-wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Motion.h1 variants={itemVariants} className="page-title">
        Contact Me
      </Motion.h1>

      <Motion.p variants={itemVariants} className="page-subtitle">
        Feel free to reach out for collaborations, projects, or opportunities.
      </Motion.p>

      <Motion.div variants={cardVariants} className="contact-card">
        <div className="contact-item">
          <h2 className="contact-label">Email</h2>
          <p className="contact-value">vishnujithu60@gmail.com</p>
        </div>

        <div className="contact-item">
          <h2 className="contact-label">Phone</h2>
          <p className="contact-value">+91 7306268318</p>
        </div>

        <div className="contact-item">
          <h2 className="contact-label">GitHub</h2>
          <a
            href="https://github.com/VishnuP2000"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="contact-item">
          <h2 className="contact-label">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/vishnu-p-0383b82b7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            View LinkedIn Profile
          </a>
        </div>
      </Motion.div>
    </Motion.section>
  );
}

export default Contacts;
