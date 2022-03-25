import { useState } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import Cards from "./Cards";
import Modal from "./Modal";

function Home() {
  const [voca, setVoca] = useState([
    "영화관 가기",
    "매일 책 읽기",
    "수영 배우기",
  ]);

  const [modal, setModal] = useState(false);

  function PostBox() {
    return modal === false ? setModal(true) : setModal(false);
  }

  return (
    <div className="Home">
      <Nav>
        <h1>신조어 단어장</h1>
      </Nav>
      <PostBtn onClick={PostBox}>등록 박스</PostBtn>
      {modal === true ? <Modal /> : null}
      <Cards voca={voca} />
    </div>
  );
}

const Nav = styled.div`
  background-color: green;
  height: 100px;
  line-height: 100px;
  margin-bottom: 50px;
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
