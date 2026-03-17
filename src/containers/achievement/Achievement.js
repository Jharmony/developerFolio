import React, {useContext, useState, useEffect} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [enableFade, setEnableFade] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth > 768 : true)
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEnableFade(window.innerWidth > 768);
    }
  }, []);

  if (!achievementSection.display) {
    return null;
  }

  const content = (
    <div className="main">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achievementsCards.map((card, i) => {
            return (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div id="achievements">
      {enableFade ? (
        <Fade bottom duration={1000} distance="20px">{content}</Fade>
      ) : (
        content
      )}
    </div>
  );
}
