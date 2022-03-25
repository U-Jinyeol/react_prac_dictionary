import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function PostPage() {
  const history = useHistory();
  const data = useSelector((state) => state);

  const input_1 = React.useRef(null);
  const input_2 = React.useRef(null);
  const input_3 = React.useRef(null);

  return (
    <Box>
      <label>타이틀</label>
      <input
        type="text"
        ref={input_1}
        onChange={() => {
          console.log(input_1.current.value);
        }}
      />
      <br />
      <label>의미</label>
      <input
        type="text"
        ref={input_2}
        onChange={() => {
          console.log(input_2.current.value);
        }}
      />
      <br />
      <label>사용 예시</label>
      <input
        type="text"
        ref={input_3}
        onChange={() => {
          console.log(input_3.current.value);
        }}
      />
      <SaveBtn
        onClick={() => {
          alert("등록완료");
          history.push("/");
        }}
      >
        등록하기
      </SaveBtn>
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
  background-color: darkcyan;
`;

const BackBtn = styled.button`
  background-color: black;
  color: white;
`;

export default PostPage;
