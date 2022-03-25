import styled from "styled-components";
// import { useSelector } from "react-redux";

function Modal() {
  return (
    <Box>
      <input />
      <Btn>등록하기</Btn>
    </Box>
  );
}

const Box = styled.div`
  margin-bottom: 30px;
  padding-left: 10px;
  border: 1px solid black;
  width: 300px;
  height: 200px;
  line-height: 40px;
`;

const Btn = styled.button`
  margin-left: 10px;
`;

export default Modal;
