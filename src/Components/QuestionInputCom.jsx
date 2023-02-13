import styled from "styled-components";

function QuestionInput({ formValue, setFormValue }) {
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setFormValue(event.target.value);
  };
  return (
    <QuestionInputContainer>
      <input
        type="text"
        name="user-input"
        id="user-input"
        className="form-input"
        onChange={handleChange}
        placeholder="Tell us your story...."
      />
      <button className="form-button">Tell us</button>
    </QuestionInputContainer>
  );
}

// styles

const QuestionInputContainer = styled.div`
  width: 40%;
  align-self: center;
  display: flex;
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  .form-input {
    background-color: #e9e9e9;
    width: 100%;
    height: 170px;
    border: transparent;
    border-bottom: 2px solid black;
    border-radius: 15px;
    padding: 30px;
    font-size: 20px;
    color: #2d2d2d;
    font-weight: 400;
    ::placeholder {
      font-size: 20px;
    }
  }
  .form-button {
    width: 180px;
    height: 46px;
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    border-radius: 5px;
    border: transparent;
    margin-top: 10px;
    font-size: 16px;
    font-family: "monument extended";
  }
`;

export default QuestionInput;
