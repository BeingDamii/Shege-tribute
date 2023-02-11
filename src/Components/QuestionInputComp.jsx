import VaulenceHead from "../resources/vawulence-head.png";
import SelectIcon from "../resources/select-icon.svg";
import styled from "styled-components";
import { useState } from "react";

function QuestionInput({ question, setQuestion }) {
  // states
  const [controls, setControls] = useState(false);

  // functions
  function getQuestion(e) {
    const userQuestion = e.target.textContent;
    console.log(e);
    setQuestion(userQuestion);
  }

  return (
    <QuestionInputContainer>
      <img src={VaulenceHead} alt="the symbol of vawulence" />
      <div className="questionconteiner">
        <div className="question">
          <h1>{question}</h1>
          <button
            onClick={() => {
              setControls(!controls);
            }}
          >
            <img src={SelectIcon} alt="icon" />
          </button>
        </div>
        <div
          className="question-select"
          style={{
            display: controls ? "flex" : "none",
          }}
        >
          <h3 onClick={getQuestion} type="special">
            What has sapa done to you?
          </h3>
          <h3 onClick={getQuestion}>How has garri saved you?</h3>
          <h3 onClick={getQuestion}>Tell you heartbreak story?</h3>
        </div>
      </div>
    </QuestionInputContainer>
  );
}

const QuestionInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: 100px;
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
    }
    button {
      background-color: transparent;
      border: none;
      margin-left: 7px;
      cursor: pointer;
    }
  }
  .question-select {
    display: flex;
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      padding: 12px;
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 1px solid black;
      cursor: pointer;
    }
  }
`;

export default QuestionInput;
