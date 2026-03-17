import React, {useContext, useState, useRef, useEffect} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function ProjectMedia({project}) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  if (project.video) {
    const videoProps = {
      src: project.video,
      className: "card-image",
      autoPlay: true,
      loop: true,
      muted: isMuted || !project.hasSound,
      playsInline: true
    };

    return (
      <div className="project-image">
        <video ref={videoRef} {...videoProps} />
        {project.hasSound && (
          <button
            type="button"
            className="video-sound-toggle"
            onClick={() => setIsMuted(prev => !prev)}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        )}
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="project-image">
        <img
          src={project.image}
          alt={project.projectName}
          className="card-image"
        ></img>
      </div>
    );
  }

  return null;
}

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const [enableFade, setEnableFade] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth > 768 : true)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEnableFade(window.innerWidth > 768);
    }
  }, []);

  if (!bigProjects.display) {
    return null;
  }

  const content = (
      <div className="main">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <ProjectMedia project={project} />
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );

  return (
    <div id="projects">
      {enableFade ? (
        <Fade bottom duration={1000} distance="20px">{content}</Fade>
      ) : (
        content
      )}
    </div>
  );
}
