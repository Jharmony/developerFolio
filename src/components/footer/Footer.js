import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "Protocol Growth Studio LLC · Web3 infrastructure, AO/Arweave deployments, and ecosystem execution."
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Learn more at{" "}
          <a
            href="https://www.linkedin.com/company/protocolgrowthstudio/"
            target="_blank"
            rel="noreferrer"
          >
            Protocol Growth Studio on LinkedIn
          </a>
        </p>
      </div>
    </Fade>
  );
}
