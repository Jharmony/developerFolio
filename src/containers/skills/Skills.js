import React, {useContext} from "react";
import "./Skills.scss";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingTerminal from "../../assets/lottie/monitorphone";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  const marqueeSkills = [
    ...(skillsSection.softwareSkills || []),
    ...(skillsSection.softwareSkills || [])
  ];

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingTerminal} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <div className="skills-text-list">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
      <div className="skills-divider">
        <p
          className={
            isDark
              ? "dark-mode subTitle skills-text-subtitle"
              : "subTitle skills-text-subtitle"
          }
        >
          {skillsSection.subTitle}
        </p>
        <div className="skills-icon-marquee">
          <div className="skills-icon-track">
            <ul className="dev-icons marquee-dev-icons" aria-label="Technology icons">
              {marqueeSkills.map((skills, i) => {
                return (
                  <li
                    key={`${skills.skillName}-${i}`}
                    className="software-skill-inline"
                    name={skills.skillName}
                  >
                    {skills.iconSvg ? (
                      <img
                        src={skills.iconSvg}
                        alt={skills.skillName}
                        className="skill-icon-svg"
                      />
                    ) : (
                      <i className={skills.fontAwesomeClassname}></i>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
