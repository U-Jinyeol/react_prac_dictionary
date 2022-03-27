import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadPostFB } from "./redux/modules/post";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector((state) => state.post.list); //리덕스 값 불러오는
  console.log(post);

  React.useEffect(() => {
    dispatch(loadPostFB());
  }, []);

  return (
    <div className="Home">
      <Nav>
        <h1>신조어 단어장</h1>
      </Nav>
      <CardWrap>
        {post.map((post, i) => {
          console.log(post);
          return (
            <Card key={i}>
              <VocaTitle>{post.title}</VocaTitle>
              <h3>{post.mean}</h3>
              <h4>{post.ex}</h4>
              <button
                onClick={() => {
                  history.push("/Edit");
                }}
              >
                수정하기
              </button>
            </Card>
          );
        })}
      </CardWrap>
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
  background-color: black;
  color: white;
  height: 100px;
  line-height: 100px;
  margin-bottom: 50px;
`;

const CardWrap = styled.div`
  color: black;
`;

const Card = styled.div`
  border: 1px solid black;
  width: 200px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  float: left;
  margin: 0 10px 30px 10px;
`;

const VocaTitle = styled.h2`
  font-size: 30px;
`;

const PostBtn = styled.button`
  background-color: black;
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
