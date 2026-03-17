import React, {useContext, useEffect, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [enableFade, setEnableFade] = useState(true);

  useEffect(() => {
    // Disable Fade on small screens (mobile) to avoid rendering issues
    if (typeof window !== "undefined") {
      setEnableFade(window.innerWidth > 768);
    }
  }, []);

  if (!workExperiences.display) {
    return null;
  }

  return (
    <div id="experience">
      {enableFade ? (
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        bannerColor: card.bannerColor
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      ) : (
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                      bannerColor: card.bannerColor
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
