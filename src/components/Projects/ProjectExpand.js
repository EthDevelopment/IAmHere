import React, { useState } from "react";
import "./ProjectExpand.css";
import ContactForm from "../Contact/ContactForm";

const ProjectExpand = ({ project, onClose, onPrev, onNext }) => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  if (!project) return null;

  const imageSections = project.sections?.filter(
    (section) => section.type === "images"
  );

  const textSections = project.sections?.filter(
    (section) => section.type !== "images"
  );

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

  const handleClose = () => {
    const modal = document.querySelector(".project-expand-modal");
    modal.style.animation = "fadeOutScale 0.5s ease-out forwards";
    setTimeout(onClose, 500); // Match the duration of the animation
  };

  return (
    <div className="project-expand-overlay">
      <div className="project-expand-modal">
        <div className="project-expand-content">
          <button className="project-expand-close" onClick={handleClose}>
            ×
          </button>
          <div className="project-expand-title-section">
            <button
              className="project-expand-nav project-expand-prev"
              onClick={onPrev}
            >
              ←
            </button>
            <div className="project-expand-title-wrapper">
              <h2 className="project-expand-title">{project.title}</h2>
              <p className="project-expand-category">{project.category}</p>
              <p className="project-expand-description">
                {project.description}
              </p>
            </div>
            <button
              className="project-expand-nav project-expand-next"
              onClick={onNext}
            >
              →
            </button>
          </div>
          <div className="project-expand-main-content">
            <div className="project-expand-text-section">
              <div className="project-expand-sections">
                {textSections?.map((section, index) => (
                  <div key={index} className="project-expand-section">
                    <h3 className="project-expand-section-header">
                      {section.header}
                    </h3>
                    {section.type === "text" && (
                      <p className="project-expand-section-text">
                        {section.content}
                      </p>
                    )}
                    {section.type === "list" && (
                      <div className="project-expand-list-content">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="project-expand-list-item"
                          >
                            <h4 className="project-expand-item-subheader">
                              {item.subheader}
                            </h4>
                            <ul className="project-expand-item-details">
                              {item.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="project-expand-detail"
                                >
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="project-expand-image-section">
              {imageSections?.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="project-expand-image-gallery"
                >
                  <div className="project-expand-image-group">
                    {section.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`Image ${imgIndex}`}
                        className="project-expand-section-image"
                      />
                    ))}
                  </div>
                  <p className="project-expand-image-annotation">
                    {section.annotation}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="project-expand-contact">
            <button className="contact-button" onClick={openContactForm}>
              Click me to get in touch with Danial
            </button>
          </div>
        </div>
      </div>
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default ProjectExpand;
