import React, { useState, useEffect } from "react";
import "./ProjectDisplay.css";
import projectsData from "./projects.json";
import ProjectExpand from "./ProjectExpand";

const ProjectDisplay = ({ theme }) => {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    setProjects(
      projectsData.map((project) => {
        const imageSection = project.sections?.find(
          (section) => section.type === "images"
        );
        return {
          id: project.id,
          title: project.title,
          category: project.category,
          description: project["category-scope"],
          sections: project.sections, // Ensure sections are included
          images: imageSection ? imageSection.images : [],
        };
      })
    );
  }, []);

  const handleProjectClick = (projectId) => {
    setExpandedProject(projectId);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  const handlePrev = () => {
    if (expandedProject !== null) {
      const currentIndex = projects.findIndex((p) => p.id === expandedProject);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setExpandedProject(projects[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (expandedProject !== null) {
      const currentIndex = projects.findIndex((p) => p.id === expandedProject);
      const nextIndex = (currentIndex + 1) % projects.length;
      setExpandedProject(projects[nextIndex].id);
    }
  };

  return (
    <div className={`project-display-container ${theme}`}>
      <h2 className="projects-header">Projects</h2>
      <div className="projects-scroll">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
            isExpanded={expandedProject === project.id}
          />
        ))}
      </div>
      {expandedProject && (
        <ProjectExpand
          project={projects.find((p) => p.id === expandedProject)}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

const ProjectCard = ({ project, onClick, isExpanded }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageRotationInterval); // Cleanup interval on component unmount
  }, [project.images.length]);

  return (
    <div
      className={`project-card ${isExpanded ? "expanded" : ""}`}
      onClick={onClick}
    >
      <div className="project-content">
        <div className="project-cover">
          <h3 className="project-title">{project.title}</h3>
          {project.images.length > 0 && (
            <>
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay"></div>
            </>
          )}
        </div>
        <div className="project-details">
          <span className="project-icon">&#128736;</span>
          <div className="project-text">
            <div className="project-category">{project.category}</div>
            <div className="project-description">{project.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
