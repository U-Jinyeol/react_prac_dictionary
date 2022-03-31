import React from "react";
import styled from "styled-components";

import { AtomSpinner } from "epic-spinners";

import {
  BiCommentEdit,
  BiCommentX,
  BiCommentCheck,
  BiPlusMedical,
} from "react-icons/bi";

import "./Home.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadPostFB,
  deletePost,
  deletePostFB,
  checkPostFB,
} from "./redux/modules/post";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector((state) => state.post.list); //리덕스 값 불러오는

  React.useEffect(() => {
    dispatch(loadPostFB(), deletePostFB(), checkPostFB());
  }, []);

  return (
    <div className="Home">
      <div className="HomeHead">
        <h1>신조어 사전</h1>
        <img src="https://item.kakaocdn.net/do/ffdfda1647c79a784040a6dad5b35d3f616b58f7bf017e58d417ccb3283deeb3" />
      </div>
      <div className="cardsWrap">
        {post.map((post, i) => {
          return (
            <Wrap post={post} key={i} className="cardBox">
              <BiCommentX
                onClick={() => {
                  console.log("삭제하기");
                  dispatch(deletePostFB(post.id));
                }}
                size="24"
                color="#F08080 "
                className="deleteBtn"
              />
              <BiCommentEdit
                onClick={() => {
                  console.log("수정페이지");
                  history.push(`/Edit/${i}`);
                }}
                size="24"
                color="#5D6D7E"
                className="editBtn"
              />
              <BiCommentCheck
                onClick={() => {
                  console.log("완료하기");
                  dispatch(checkPostFB(post.id));
                }}
                size="24"
                color="#5D6D7E"
                className="checkBtn"
              />
              <h1>"{post.title}"</h1>
              <hr></hr>
              <p>뭔말임?</p>
              <h3>{post.mean}</h3>
              <p>이럴 때 씁니다!</p>
              <h4>{post.ex}</h4>
            </Wrap>
          );
        })}
      </div>
      <button
        className="button is-success postBtn"
        onClick={() => {
          history.push("/PostPage");
        }}
      >
        <BiPlusMedical />
      </button>
    </div>
  );
}

const Wrap = styled.div`
  background-color: ${(post) =>
    post.post.bool === true ? "#FEC22E " : "white"};
  border: 1px solid ${(post) => (post.post.bool === true ? "#ddd" : "#ddd")};
  h1,
  h3,
  h4,
  p {
    color: ${(post) => post.post.bool === true && "white"};
  }
`;

export default Home;
