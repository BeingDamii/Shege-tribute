import styled from "styled-components";
import Attribution from "./AttributionComp";
import QuestionInput from "./QuestionInputComp";
import { useState } from "react";

function UserForm() {
  const [userQuestion, setUserQuestion] = useState(
    "What has shege don to you? "
  );
  return (
    <UserFormContainer>
      <Attribution />
      <QuestionInput question = {userQuestion} setQuestion = { setUserQuestion} />
    </UserFormContainer>
  );
}

const UserFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default UserForm;
