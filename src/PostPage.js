import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost, loadPostFB, addPostFB } from "./redux/modules/post";
//파이어베이스 db 연결 확인
import { db } from "./firebase";
//콜렉션은 만들어준거 가져오는거, 겟독은 한개, 겟독스는 여러개, 애드독은 추가, 업데이트독은 수정,어떤 도큐먼트를 수정할지를 불러와야 해서 doc도 임포트,딜리트독은 삭제 )
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function PostPage() {
  const history = useHistory();
  const text_title = React.useRef(null);
  const text_mean = React.useRef(null);
  const text_ex = React.useRef(null);
  const dispatch = useDispatch(); //수정하는거

  //콜렉션을 먼저 접근,
  React.useEffect(() => {
    // 파이어스토어(db), 콜렉션, 수정 또는 삭제할 부분의 아이디
    // const docRef = doc(db, "dictionary", "6JUPHSrwRSoIotHYvkrB");
    // deleteDoc(docRef);
    //어떻게 바꿀지 정의
    // updateDoc(docRef, { text: "new2" });
    //애드독은 어떤 데이터를 추가할지 써줘야한다 ↓↓↓↓↓
    // addDoc(collection(db, "dictionary"), { text: "new" });
    //콜렉션 정보를 가져온다
    //promise로 넘어오기 때문에 데이터 확인은 별도로 해줘야 함
    //바로 async await -> 니가 정보 줄때까지 기다린다 ~ 라는 의미
    // const query = await getDocs(collection(db, "dictionary"));
    // console.log(query);
    //데이터가 불러와지지만 읽기 불편한 형태라 변환이 필요
    //forEach를 써서 도큐먼트 객체를 반복문을 돌림
    // query.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    dispatch(loadPostFB());
  }, []);

  function addVocaList() {
    //액션 실행 함수가 바로 실행되도록 삽입
    dispatch(
      addPostFB({
        title: text_title.current.value,
        mean: text_mean.current.value,
        ex: text_ex.current.value,
        date: new Date(),
      })
    );
    history.push("/");
  }

  return (
    <Box>
      <label>타이틀</label>
      <input type="text" ref={text_title} />
      <br />
      <label>의미</label>
      <input type="text" ref={text_mean} />
      <br />
      <label>사용 예시</label>
      <input type="text" ref={text_ex} />
      <SaveBtn onClick={addVocaList}>등록하기</SaveBtn>
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

export default PostPage;