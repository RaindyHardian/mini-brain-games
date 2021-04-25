import React, { useState, useRef } from "react";
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
  const refWrapperNotif = useRef(null);
  const refPicture = useRef(null);
  const [question, setQuestion] = useState({
    previous: null,
    current: shape[Math.floor(Math.random() * 4)],
  });
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const submitAnswer = (userAnswer) => {
    if (question.current.type === question.previous.type) {
      if (userAnswer) {
        // user correct
        refWrapperNotif.current.classList.add("speedmatch___wrapper_true");
        setTimeout(() => {
          refWrapperNotif.current.classList.remove("speedmatch___wrapper_true");
        }, 700);
      } else {
        refWrapperNotif.current.classList.add("speedmatch___wrapper_false");
        setTimeout(() => {
          refWrapperNotif.current.classList.remove(
            "speedmatch___wrapper_false"
          );
        }, 700);
      }
    } else {
      if (userAnswer) {
        // user false
        refWrapperNotif.current.classList.add("speedmatch___wrapper_false");
        setTimeout(() => {
          refWrapperNotif.current.classList.remove(
            "speedmatch___wrapper_false"
          );
        }, 700);
      } else {
        refWrapperNotif.current.classList.add("speedmatch___wrapper_true");
        setTimeout(() => {
          refWrapperNotif.current.classList.remove("speedmatch___wrapper_true");
        }, 700);
      }
    }
    changeQuestion();
  };

  const changeQuestion = () => {
    if (isFirstPlay) {
      setIsFirstPlay(false);
    }

    refPicture.current.classList.add("speedmatch__picture");

    const newQuestion = shape[Math.floor(Math.random() * 4)];
    const prevQuestion = question.current;

    // when the image opacity 0 then set the question
    setTimeout(() => {
      setQuestion((prev) => {
        return { ...prev, previous: prevQuestion, current: newQuestion };
      });
    }, 300);
    setTimeout(() => {
      refPicture.current.classList.remove("speedmatch__picture");
    }, 700);
  };

  return (
    <div className="speedmatch">
      <div className="speedmatch__wrapper" ref={refWrapperNotif}>
        <div className="speedmatch__hint">
          {!isFirstPlay
            ? "Is it the same figure as before?"
            : "Remember this first shape"}
        </div>
        <div className="speedmatch__question">
          <img
            src={question.current.picture}
            alt={question.current.type}
            ref={refPicture}
          />
        </div>
        <div className="speedmatch__button_wrap">
          {!isFirstPlay ? (
            <>
              <button
                className="speedmatch__button speedmatch__button_left dark-red"
                onClick={() => submitAnswer(false)}
              >
                No
              </button>
              <button
                className="speedmatch__button sea-green"
                onClick={() => submitAnswer(true)}
              >
                Yes
              </button>
            </>
          ) : (
            <button
              className="speedmatch__button_start"
              onClick={() => changeQuestion()}
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeedMatch;
