import VaulenceHead from "../resources/vawulence-head.png";
import SelectIcon from "../resources/select-icon.svg";
import styled from "styled-components";
import { useState } from "react";

function QuestionSelector({ question, setQuestion }) {
  // states
  const [controls, setControls] = useState(false);

  // functions
  function getQuestion(e) {
    const userQuestion = e.target.textContent;
    console.log(e);
    setQuestion(userQuestion);
  }

  return (
    <QuestionSelectorContainer>
      <img src={VaulenceHead} alt="the symbol of vawulence" />
      <div className="question-container">
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
          <h3 onClick={getQuestion}>What has shege done to you? </h3>
        </div>
      </div>
      <div className="question-container-mobile">
        <h1 className="question-mobile">What has shege done to you?</h1>
        <div className="question-toggle">
          <h3>Change question</h3>
          <img src={SelectIcon} alt="click to change question" />
        </div>
      </div>
    </QuestionSelectorContainer>
  );
}

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
      /* background-color: beige; */
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
  .question-select {
    display: flex;
    display: none;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
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

export default QuestionSelector;
