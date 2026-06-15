import { motion as Motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiOpenjdk,
  SiReact,
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFirebase,
  SiSocketdotio,
  SiCloudinary,
  SiJsonwebtokens,
  SiRedux,
  SiVercel,
  SiFigma,
  SiRazorpay,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { containerVariants, itemVariants } from "../motionVariants";
import "./Skills.css";

const skillIcons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  C: SiC,
  "C++": SiCplusplus,
  Java: SiOpenjdk,
  React: SiReact,
  HTML: SiHtml5,
  Bootstrap: SiBootstrap,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDb: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  Firebase: SiFirebase,
  "Socket.io": SiSocketdotio,
  Cloudinary: SiCloudinary,
  JWT: SiJsonwebtokens,
  NodeMailer: TbMail,
  Redux: SiRedux,
  AWS: FaAws,
  Vercel: SiVercel,
  Figma: SiFigma,
  Razorpay: SiRazorpay,
};

function Skills() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "C", "C++", "Java"],
    Frontend: ["React", "HTML", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "MongoDb", "PostgreSQL"],
    Libraries: [
      "Git",
      "GitHub",
      "Firebase",
      "Socket.io",
      "Cloudinary",
      "JWT",
      "NodeMailer",
      "Redux",
      "AWS",
      "Vercel",
      "Figma",
      "Razorpay",
    ],
  };

  return (
    <Motion.section
      className="page-section page-gradient"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Motion.h1 variants={itemVariants} className="page-title">
        My Skills
      </Motion.h1>

      <Motion.p variants={itemVariants} className="page-subtitle">
        Technologies and tools I work with across the stack
      </Motion.p>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <Motion.div
            key={category}
            variants={itemVariants}
            className="skill-category"
          >
            <h2 className="section-heading">{category}</h2>

            <div className="skills-pills">
              {skillList.map((skill) => {
                const Icon = skillIcons[skill];

                return (
                  <Motion.div
                    key={skill}
                    className="skill-pill"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {Icon && <Icon className="skill-pill-icon" aria-hidden />}
                    <span>{skill}</span>
                  </Motion.div>
                );
              })}
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.section>
  );
}

export default Skills;
