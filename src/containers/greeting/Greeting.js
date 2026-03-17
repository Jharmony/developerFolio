import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import programmingAni from "../../assets/lottie/programming";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                Technical Lead, AI engineer, and decentralized systems builder
                operating at the intersection of permanent storage, autonomous
                compute, and ecosystem infrastructure.&nbsp;
                <a
                  href="https://www.arweave.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Arweave
                </a>
                &nbsp;, decentralized storage blockchain with data permanence for
                at least 200 years.&nbsp;
                <a href="https://ao.arweave.net" target="_blank" rel="noreferrer">
                  AO
                </a>
                &nbsp;, the Hyper Parallel Computer for scalable autonomous
                compute.&nbsp;
                <a
                  href="https://hyperbeam.ar.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  HyperBEAM
                </a>
                &nbsp;, decentralized operating system for AO.&nbsp;
                <a
                  href="https://bazar.arweave.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  BazAR
                </a>
                &nbsp;, atomic asset marketplace infrastructure, and{" "}
                <a
                  href="https://x.com/TRue_JDHarmony/status/1972076008829513990"
                  target="_blank"
                  rel="noreferrer"
                >
                  Permabites IRL
                </a>
                &nbsp;, global real-world events and education for the permaweb.
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="SEE MY RESUME"
                    href={greeting.resumeLink}
                    newTab
                    className="resume-button-div"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={programmingAni} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
