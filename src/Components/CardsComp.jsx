import styled from "styled-components";
import Card from "./CardComp";

function Cards() {
  return (
    <CardsWrapper>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </CardsWrapper>
  );
}

// component styles

const CardsWrapper = styled.div`
  width:100%;
  align-self: flex-start;
  background-color: azure;
  margin-left: 50px;
  /* display: flex; */
  flex-direction: row;
  height: 300px;
  overflow: hidden;
`;

export default Cards;
