import React, { useState, useRef } from "react";
import "./Evenvowel.css";

const EvenVowel = () => {
  const wrapperNotif = useRef(null);
  const characters = "ABCDEFGHIJKLMNOU";

  // order true = alphabet first then number
  // evenPlace true = the position of the question will be displayed on the top (even)
  const [question, setQuestion] = useState({
    alphabet: characters.charAt(Math.floor(Math.random() * (15 - 0) + 0)),
    number: Math.floor(Math.random() * (10 - 1) + 1),
    order: Math.random() < 0.5,
    evenPlace: true,
  });

  const showQuestion = (screenEvenPlace) => {
    if (question.evenPlace === true) {
      if (screenEvenPlace) {
        if (question.order) {
          return (
            <>
              <div className="evenvowel__item_title">Is it even?</div>
              <div className="evenvowel__item_question">
                {question.alphabet}
                {question.number}
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="evenvowel__item_title">Is it even?</div>
              <div className="evenvowel__item_question">
                {question.number}
                {question.alphabet}
              </div>
            </>
          );
        }
      }
    } else {
      if (!screenEvenPlace) {
        if (question.order) {
          return (
            <>
              <div className="evenvowel__item_title">Is it vowel?</div>
              <div className="evenvowel__item_question">
                {question.alphabet}
                {question.number}
              </div>
            </>
          );
        } else {
          return (
            <>
              <div className="evenvowel__item_title">Is it vowel?</div>
              <div className="evenvowel__item_question">
                {question.number}
                {question.alphabet}
              </div>
            </>
          );
        }
      }
    }
  };

  const submitAnswer = (userAnswer) => {
    if (question.evenPlace) {
      if (question.number % 2 === 0 && userAnswer === true) {
        // if the number is even and the user answered true
        // console.log("Jawaban benar, ini genap");

        wrapperNotif.current.classList.add("evenvowel__wrapper_true");
        setTimeout(() => {
          wrapperNotif.current.classList.remove("evenvowel__wrapper_true");
        }, 700);
      } else if (question.number % 2 === 0 && userAnswer === false) {
        // if the number is even and the user answered false
        // console.log("Jawaban salah, ini harusnya genap");
        wrapperNotif.current.classList.add("evenvowel__wrapper_false");
        setTimeout(() => {
          wrapperNotif.current.classList.remove("evenvowel__wrapper_false");
        }, 700);
      } else if (question.number % 2 !== 0 && userAnswer === true) {
        // if the number is odd and the user answered true
        // console.log("Jawaban salah, ini bukan angka genap");

        wrapperNotif.current.classList.add("evenvowel__wrapper_false");
        setTimeout(() => {
          wrapperNotif.current.classList.remove("evenvowel__wrapper_false");
        }, 700);
      } else if (question.number % 2 !== 0 && userAnswer === false) {
        // if the number is odd and the user answered false
        // console.log("Jawaban benar, ini bukan angka genap");

        wrapperNotif.current.classList.add("evenvowel__wrapper_true");
        setTimeout(() => {
          wrapperNotif.current.classList.remove("evenvowel__wrapper_true");
        }, 700);
      }
    } else {
      if (
        question.alphabet === "A" ||
        question.alphabet === "I" ||
        question.alphabet === "U" ||
        question.alphabet === "E" ||
        question.alphabet === "O"
      ) {
        if (userAnswer === true) {
          // console.log("Benar ini huruf vokal");
          wrapperNotif.current.classList.add("evenvowel__wrapper_true");
          setTimeout(() => {
            wrapperNotif.current.classList.remove("evenvowel__wrapper_true");
          }, 700);
        } else {
          // console.log("Salah ini harusnya huruf vokal");
          wrapperNotif.current.classList.add("evenvowel__wrapper_false");
          setTimeout(() => {
            wrapperNotif.current.classList.remove("evenvowel__wrapper_false");
          }, 700);
        }
      } else {
        if (userAnswer === true) {
          // console.log("Salah ini bukan huruf vokal");
          wrapperNotif.current.classList.add("evenvowel__wrapper_false");
          setTimeout(() => {
            wrapperNotif.current.classList.remove("evenvowel__wrapper_false");
          }, 700);
        } else {
          // console.log("Benar ini bukan huruf vokal");
          wrapperNotif.current.classList.add("evenvowel__wrapper_true");
          setTimeout(() => {
            wrapperNotif.current.classList.remove("evenvowel__wrapper_true");
          }, 700);
        }
      }
    }
    changeQuestion();
  };

  const changeQuestion = () => {
    const c = characters.charAt(Math.floor(Math.random() * (15 - 0) + 0));
    const n = Math.floor(Math.random() * (10 - 1) + 1);
    const order = Math.random() < 0.5;
    const evenPlace = Math.random() < 0.5;
    setQuestion((prev) => {
      return {
        ...prev,
        alphabet: c,
        number: n,
        order: order,
        evenPlace: evenPlace,
      };
    });
  };

  return (
    <div className="evenvowel">
      <div className="evenvowel__wrapper" ref={wrapperNotif}>
        <div className="evenvowel__item">{showQuestion(true)}</div>
        <div className="evenvowel__item">{showQuestion(false)}</div>
        <div className="evenvowel__button_wrap">
          <button
            className="evenvowel__button evenvowel__button_left dark-red"
            onClick={() => submitAnswer(false)}
          >
            No
          </button>
          <button
            className="evenvowel__button sea-green"
            onClick={() => submitAnswer(true)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvenVowel;
