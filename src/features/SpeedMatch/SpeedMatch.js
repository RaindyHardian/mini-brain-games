import React, { useState } from "react";
import "./speedmatch.css";

const shape = [
  {
    type: "square",
    picture: "/square-yellow.svg",
  },
  {
    type: "triangle",
    picture: "/triangle-green.svg",
  },
  {
    type: "circle",
    picture: "/ellipse-red.svg",
  },
  {
    type: "pentagon",
    picture: "/pentagon-purple.svg",
  },
];

const SpeedMatch = () => {
  const [question, setQuestion] = useState({
    previous: null,
    current: shape[Math.floor(Math.random() * 4)],
  });

  return (
    <div className="speedmatch">
      <div className="speedmatch__wrapper">
        <div className="speedmatch__hint">Is it the same figure as before?</div>
        <div className="speedmatch__question">
          <img src={question.current.picture} />
        </div>
        <div className="speedmatch__button_wrap">
          <button className="speedmatch__button speedmatch__button_left dark-red">
            No
          </button>
          <button className="speedmatch__button sea-green">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default SpeedMatch;
