import { motion as Motion } from "framer-motion";
import netflixImg from "../assets/netflix.png";
import todoImg from "../assets/todo.png";
import usmImg from "../assets/usm.png";
import furnitureImg from "../assets/furniture.png";
import { containerVariants, itemVariants, cardVariants } from "../motionVariants";
import "./Projects.css";

function Projects() {
  const project = [
    {
      title: "Netflix Clone",
      images: netflixImg,
      ProjectLinks: "https://netflix-clone-lac-nine-28.vercel.app",
      techs: ["HTML", "React"],
      description:
        "Static Netflix interface clone built with HTML and CSS for UI design practice.",
    },
    {
      title: "ToDo List",
      images: todoImg,
      ProjectLinks: "https://todo-zeta-weld-46.vercel.app",
      techs: ["HTML", "React"],
      description: "Task management app with add, edit, and delete functionality.",
    },
    {
      title: "USM system",
      images: usmImg,
      ProjectLinks: "https://usm-react-wbdo.vercel.app",
      techs: ["HTML", "React", "Nodejs"],
      description: "University management system with student and admin dashboards.",
    },
    {
      title: "furniture E-comm",
      images: furnitureImg,
      ProjectLinks: "https://frenzy-ykgi.onrender.com",
      techs: ["HTML", "React", "NodeJs"],
      description: "Full-stack e-commerce platform for furniture with cart and checkout.",
    },
  ];

  return (
    <Motion.section
      className="page-section page-gradient"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Motion.h1 variants={itemVariants} className="page-title">
        My Projects
      </Motion.h1>

      <Motion.p variants={itemVariants} className="page-subtitle">
        A selection of apps and interfaces I have built
      </Motion.p>

      <div className="projects-section">
        <div className="projects-grid">
          {project.map((proj) => (
            <Motion.article
              key={proj.title}
              variants={cardVariants}
              className="project-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="project-image-wrap">
                <img src={proj.images} alt={proj.title} />
              </div>

              <h2 className="project-title">{proj.title}</h2>
              <p className="project-desc">{proj.description}</p>

              <div className="project-techs">
                {proj.techs.map((tech) => (
                  <span key={tech} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.ProjectLinks}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </Motion.article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

export default Projects;
