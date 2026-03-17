import React, {Suspense, useContext} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTweetEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }

  const tweets = twitterDetails.tweets || [];
  if (!tweets.length) return null;

  const extractId = url => {
    if (!url) return null;
    const parts = url.split("/status/");
    if (parts.length < 2) return null;
    return parts[1].split("?")[0];
  };

  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <h1 className={isDark ? "dark-mode tw-heading" : "tw-heading"}>
          Ecosystem Highlights
        </h1>
        <div className="tw-scroll">
          {tweets.map((url, idx) => {
            const id = extractId(url);
            if (!id) return null;
            return (
              <div
                key={`${id}-${idx}`}
                className={isDark ? "tw-embed-card dark-mode" : "tw-embed-card"}
              >
                <TwitterTweetEmbed
                  tweetId={id}
                  options={{
                    theme: isDark ? "dark" : "light",
                    conversation: "none",
                    align: "center"
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
