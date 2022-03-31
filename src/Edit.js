import React, { useState } from "react";
import "./PostPage.css";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatePostFB } from "./redux/modules/post";

function Edit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const post_index = params.post_index;
  const post = useSelector((state) => state.post.list);
  console.log(post_index);

  const text_title = React.useRef(null);
  const text_mean = React.useRef(null);
  const text_ex = React.useRef(null);

  console.log(text_title);

  function updatePost(new_post_id) {
    dispatch(
      updatePostFB({
        title: text_title.current.value,
        mean: text_mean.current.value,
        ex: text_ex.current.value,
        id: new_post_id,
      })
    );
    history.push("/");
  }

  return (
    <div>
      <div className="HomeHead">
        <h1>신조어 사전</h1>
        <img src="https://item.kakaocdn.net/do/ffdfda1647c79a784040a6dad5b35d3f616b58f7bf017e58d417ccb3283deeb3" />
      </div>
      <form className="box">
        <div className="field">
          <label className="label">단어 이름</label>
          <div className="control">
            <input
              defaultValue={post[post_index].title}
              className="input"
              type="text"
              ref={text_title}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">단어 의미</label>
          <div className="control">
            <input
              defaultValue={post[post_index].mean}
              className="input"
              type="text"
              ref={text_mean}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">사용 예시</label>
          <div className="control">
            <input
              defaultValue={post[post_index].ex}
              className="input"
              type="text"
              ref={text_ex}
            />
          </div>
        </div>

        <button
          className="button is-success CheckBtn"
          onClick={() => {
            updatePost(post[post_index].id);
          }}
        >
          수정 하기
        </button>
        <button
          className="button is-dark BackBtn"
          onClick={() => {
            history.push("/");
          }}
        >
          뒤로가기
        </button>
      </form>
    </div>
  );
}

export default Edit;
