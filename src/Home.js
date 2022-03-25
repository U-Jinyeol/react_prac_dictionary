import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "./redux/modules/post";

function Home() {
  const history = useHistory();
  const voca = useSelector((state) => state.post.list); //리덕스 값 불러오는
  console.log(voca);
  const text = React.useRef(null);
  const dispatch = useDispatch(); //수정하는거

  function addVocaList() {
    //액션 실행 함수가 바로 실행되도록 삽입
    dispatch(createPost(text.current.value));
    console.log(text.current.value);
  }

  const [like, setLike] = useState([0, 0, 0, 0]);
  const newLike = [...like];

  return (
    <div className="Home">
      <Nav>
        <h1>신조어 단어장</h1>
      </Nav>
      <div>
        {voca.map((voca, idx1) => {
          return (
            <Card key={idx1}>
              <h2>{voca}</h2>
              <span
                onClick={() => {
                  newLike[idx1]++;
                  return setLike(newLike);
                }}
              >
                👍
              </span>
              {like[idx1]}
            </Card>
          );
        })}
      </div>
      <input type="text" ref={text}></input>
      <button onClick={addVocaList}>등록완료</button>
      <PostBtn
        onClick={() => {
          history.push("/PostPage");
        }}
      >
        신조어 등록
      </PostBtn>
    </div>
  );
}

const Nav = styled.div`
  background-color: green;
  height: 100px;
  line-height: 100px;
  margin-bottom: 50px;
`;

const Card = styled.div`
  border: 1px solid black;
  height: 80px;
  width: 200px;
  margin-bottom: 20px;
  display: flex;
`;

const PostBtn = styled.button`
  background-color: darkblue;
  border: none;
  color: white;
  height: 40px;
  width: 100px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0px 0px 6px black;
    font-size: 1rem;
    font-weight: 900;
  }
`;

export default Home;
