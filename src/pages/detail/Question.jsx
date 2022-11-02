import styled from "styled-components";

const Question = () => {
  return (
    <QuestionDiv>
      <MarginBottom>
        <PositionAbsolute>
          <QuestionButton>{/* <ButtonSpan></ButtonSpan> */}</QuestionButton>
        </PositionAbsolute>
      </MarginBottom>
    </QuestionDiv>
  );
};

export default Question;

const QuestionDiv = styled.div`
  position: relative;
  width: 1010px;
  padding-bottom: 100px;
`;
const MarginBottom = styled.div`
  margin-bottom: 60px;
`;
const PositionAbsolute = styled.div`
  position: absolute;
  right: 0px;
`;
const QuestionButton = styled.button`
  border-radius: 3px;
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 40px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
`;
