import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Edit() {
  const history = useHistory();

  return (
    <Box>
      <label>타이틀</label>
      <input type="text" />
      <br />
      <label>의미</label>
      <input type="text" />
      <br />
      <label>사용 예시</label>
      <input type="text" />
      <SaveBtn>수정완료</SaveBtn>
      <BackBtn
        onClick={() => {
          history.push("/");
        }}
      >
        뒤로가기
      </BackBtn>
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

const SaveBtn = styled.button`
  display: block;
  background-color: white;
  &:hover {
    box-shadow: 0px 0px 6px black;
    font-size: 1rem;
    font-weight: 900;
  }
`;

const BackBtn = styled.button`
  background-color: black;
  color: white;
  &:hover {
    box-shadow: 0px 0px 6px black;
    font-size: 1rem;
    font-weight: 900;
  }
`;

export default Edit;
