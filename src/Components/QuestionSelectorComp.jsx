import VaulenceHead from "../resources/vawulence-head.png";
import SelectIcon from "../resources/select-icon.svg";
import styled from "styled-components";
import { useState } from "react";

function QuestionSelector({ questions, setQuestions }) {
  // states
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);

  // functions
  function changeQuestion() {
    if (index !== questions.length) {
      setQuestion(questions[index]);
      setIndex(index + 1);
      console.log(index);
    } else {
      setIndex(1);
      setQuestion(questions[0]);
      console.log(question, index);
    }
  }

  // Elements
  return (
    <QuestionSelectorContainer>
      <img src={VaulenceHead} alt="the symbol of vawulence" />
      <div className="question-container">
        <div className="question">
          <h1>{question}</h1>
          <button
            onClick={() => {
              changeQuestion();
            }}
          >
            <img src={SelectIcon} alt="icon" />
          </button>
        </div>
      </div>

      {/*  mobile-only elements */}

      <div className="question-container-mobile">
        <h1 className="question-mobile">{question}</h1>
        <div
          className="question-toggle"
          onClick={() => {
            changeQuestion();
          }}
        >
          <h3>Change question</h3>
          <img src={SelectIcon} alt="click to change question" />
        </div>
      </div>
    </QuestionSelectorContainer>
  );
}

// styles
const QuestionSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    margin-top: 30%;
    img {
      width: 70px;
    }
  }
  .question-container {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .question {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    width: 100%;
    h1 {
      font-size: 20px;
      @media only screen and (max-width: 600px) {
        font-size: 16px;
        text-align: center;
      }
    }
    button {
      background-color: transparent;
      border: none;
      margin-left: 7px;
      cursor: pointer;
    }
  }

  /* mobile styles for question selector */
  .question-container-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 90%;
    @media only screen and (min-width: 600px) {
      display: none;
    }
    .question-mobile {
      font-size: 22px;
      width: 80%;
      text-align: center;
    }
    .question-toggle {
      display: flex;
      align-self: center;
      justify-self: center;
      width: fit-content;
      margin-top: 10px;
      h3 {
        font-family: "poppins";
        font-size: 20px;
        font-weight: 500;
        color: #548838;
      }
      img {
        width: 20px;
        margin-left: 10px;
      }
    }
  }
`;

export default QuestionSelector;
