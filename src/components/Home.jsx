import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Resume from "../assets/resume.pdf";
import vishnuImg from "../assets/vishnuimg.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TiltedCard from "./TiltedCard";
import "./Home.css";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Motion.section
      className="hero-gradient min-h-screen pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-hero">
        <Motion.div
          variants={itemVariants}
          className="home-profile-col glow-ring"
        >
          <div className="profile-frame">
            <TiltedCard imageSrc={vishnuImg} />
          </div>
        </Motion.div>

        <div className="home-content">
          <Motion.span variants={itemVariants} className="role-badge">
            MERN Stack Developer
          </Motion.span>

          <Motion.h1 variants={itemVariants} className="home-name">
            Hi, I'm Vishnu
          </Motion.h1>

          <Motion.p variants={itemVariants} className="home-bio">
            Full stack web developer specializing in the MERN stack with expertise
            in JavaScript, React, Node.js, and MongoDB
          </Motion.p>

          <Motion.div variants={itemVariants} className="home-cta-row">
            <Motion.button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
            </Motion.button>

            <Link to="/projects" className="btn-secondary">
              View Projects
            </Link>
          </Motion.div>

          <Motion.div variants={itemVariants} className="home-social-row">
            <Motion.a
              href="https://github.com/VishnuP2000"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </Motion.a>

            <Motion.a
              href="https://www.linkedin.com/in/vishnu-p-0383b82b7"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </Motion.a>
          </Motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <Motion.div
            key="resume-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <Motion.div
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <Motion.div
                className="modal-header"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <div className="modal-header-text">
                  <span className="modal-label">Resume</span>
                  <h2 className="modal-title">Vishnu P</h2>
                </div>

                <Motion.button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="modal-close"
                  aria-label="Close resume"
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  ×
                </Motion.button>
              </Motion.div>

              <Motion.div
                className="modal-body"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
              >
                <iframe
                  src={Resume}
                  title="Resume"
                  className="modal-iframe"
                />
              </Motion.div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.section>
  );
}

export default Home;
