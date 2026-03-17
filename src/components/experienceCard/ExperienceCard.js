import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    if (cardInfo.bannerColor) return;
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark, isExpanded, shouldTruncate}) => {
    if (!descBullets) return null;

    return descBullets.map((item, i) => {
      if (!isExpanded && shouldTruncate && i > 1) {
        // show at most first 2 bullets in collapsed view
        return null;
      }
      return (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      );
    });
  };

  const fullDesc = cardInfo.desc || "";
  const shouldTruncate =
    fullDesc.length > 260 ||
    (cardInfo.descBullets &&
      cardInfo.descBullets.join(" ").length > 180);

  const displayedDesc =
    shouldTruncate && !isExpanded
      ? fullDesc.slice(0, 260).trimEnd() + "…"
      : fullDesc;

  const bannerBackground = cardInfo.bannerColor || rgb(colorArrays);

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={bannerBackground ? {background: bannerBackground} : undefined}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {displayedDesc}
        </p>
        <ul className="experience-desc-bullets">
          <GetDescBullets
            descBullets={cardInfo.descBullets}
            isDark={isDark}
            isExpanded={isExpanded}
            shouldTruncate={shouldTruncate}
          />
        </ul>
        {shouldTruncate && (
          <button
            type="button"
            className="experience-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
