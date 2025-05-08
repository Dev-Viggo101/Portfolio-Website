import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import figmaDesign from '../assets/figma website design.png';
import jsRecipeSearch from '../assets/JS recipe search.png';
import scratchGame from '../assets/scratch project.png';
import javaWeb from '../assets/java project.png';
import bugTrackerApp from '../assets/bug tracker app.png'

const projectsOne = [
  {
    image: figmaDesign,
    title: "Website Redesign",
    description: "The objective of this project is to redesign an existing website to enhance its user experience by applying UX design principles.",
    tech: ["Figma"],
  },
  {
    image: jsRecipeSearch,
    title: "Recipe Website",
    description: "The goal of this website it to allow users to search for recipes, view details, and interact with the recipe content dynamically. The task is to implement a feature that enhances user interaction with the recipe details using the DOM.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: scratchGame,
    title: "Puzzle Game",
    description: "A game created only in Scratch. The purpose of this project was to gain some coding experience by using simple building blocks to create the program. The objective of the game is for the player to navigate the engineering world. By solving engineering questions to journey through the game, the player is able to gain some knowledge of engineering.",
    tech: ["Scratch"],
  },
];

const projectsTwo = [
  {
    image: javaWeb,
    title: "Employee Login & Registration System",
    description: "The task is to create a web application that implements user login and registration functionality. The application is built using Java Server Pages (JSP) for the front-end, Servlets for the back-end processing, and PostgreSQL for the database.",
    tech: ["Java"],
  },
  {
    image: bugTrackerApp,
    title: "Bug Tracker App",
    description: "The objective of this project is to create a simple in-house bug tracker to keep track of issues during development without using a full-blown service like Jiro or Trello.",
    tech: ["React"]
  }
];

function ProjectsCard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const allProjects = [...projectsOne, ...projectsTwo];

  return (
    <>
      <div style={gridContainer}>
        {allProjects.map((project, i) => (
          <ProjectCard
            key={`${project.title}-${i}`}
            i={i}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectCard({ image, title, description, tech, gh, i, onClick }) {
  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <motion.div
        style={card}
        variants={cardVariants}
        className="card"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.3 },
        }}
        onClick={onClick}
      >
        <img src={image} alt={title} style={cardImage} />
        <h3 style={cardTitle}>{title}</h3>
        <p style={cardDescription}>{description}</p>
        <div style={techList}>
          {tech.map((t) => (
            <span key={t} style={techTag}>{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  return (
    <motion.div
      style={modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        style={modalContent}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.image} alt={project.title} style={cardImage} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div style={techList}>
          {project.tech.map((t) => (
            <span key={t} style={techTag}>{t}</span>
          ))}
        </div>
        <button style={closeButton} onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -4,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const gridContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "40px",
  padding: "100px 20px",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginTop: '-350px'
};

const card = {
  width: 450,
  height: '600px',
  background: "#f5f5f5",
  borderRadius: 20,
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  cursor: "pointer",
};

const cardImage = {
  maxWidth: "100%",
  borderRadius: 12,
  marginBottom: 12,
};

const cardTitle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "10px 0 5px",
};

const cardDescription = {
  fontSize: "0.95rem",
  marginBottom: 10,
  color: "#333",
};

const techList = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 10,
};

const techTag = {
  backgroundColor: "#222",
  color: "#fff",
  padding: "4px 8px",
  borderRadius: 8,
  fontSize: "0.75rem",
};

const ghCard = {
  width: 50,
  marginTop: 10,
  borderRadius: '10px',
  boxShadow: 'none'
};

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent = {
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  width: "90%",
  maxWidth: "600px",
  textAlign: "center",
  position: "relative",
};

const closeButton = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#6B21A8 ",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ProjectsCard;