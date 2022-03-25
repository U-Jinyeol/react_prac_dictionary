import { useCallback, useState } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";

function Cards({ voca }) {
  const myCards = [...voca];
  console.log(myCards);
  const [like, setLike] = useState([0, 0, 0]);
  const newLike = [...like];

  return (
    <div>
      {myCards.map((myCards, idx1) => {
        return (
          <Card key={idx1}>
            <h2>{myCards}</h2>
            <span
              onClick={() => {
                setLike(
                  newLike.map((like, idx2) => {
                    return idx2 === idx1 ? like + 1 : like;
                  })
                );
              }}
            >
              👍
            </span>
            {like[idx1]}
          </Card>
        );
      })}
    </div>
  );
}

const Card = styled.div`
  border: 1px solid black;
  height: 80px;
  width: 200px;
  margin-bottom: 20px;
  display: flex;
`;

// const Title = styled.h2`
//   display: inline-block;
// `;

export default Cards;
