import styled from "styled-components";
import Attribution from "./AttributionComp";
import QuestionInput from "./QuestionInputCom";
import { useState } from "react";
import QuestionSelector from "./QuestionSelectorComp";

function UserForm() {
  const [userQuestion, setUserQuestion] = useState(
    "What has shege done to you? "
  );
  const [formValue, setFormValue] = useState("Tell us your story.... ");
  return (
    <UserFormContainer>
      <Attribution />
      <QuestionSelector question={userQuestion} setQuestion={setUserQuestion} />
      <QuestionInput formValue={formValue} setFormValue={setFormValue} />
    </UserFormContainer>
  );
}

const UserFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default UserForm;
