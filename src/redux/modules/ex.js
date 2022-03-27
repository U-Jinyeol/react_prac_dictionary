// // ex.js

// const CREATE = "ex/CREATE";

// //초기값
// const initialState = {
//   list: ["예시1", "예시2", "예시3", "예시4"],
// };

// // Action Creators
// // 키:밸류 값이 같으면 밸류값을 생략할 수 있음
// // ex. weidget:widget => widget
// export function createEx(ex) {
//   console.log("액션 예시");
//   console.log(ex);
//   return { type: CREATE, ex: ex };
// }

// // Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     //어떤 케이스인지 써주기
//     case "ex/CREATE": {
//       console.log("예시 변경");
//       //변경 될 값이 들어갈 새로운 변수 선언
//       //새로운 변수는 수정 값을 적어줘야하는데 ...으로 복사하고
//       //action의 bucket(수정되는 값)으로 변경한다는 의미
//       const new_ex_list = [...state.list, action.ex];
//       console.log(new_ex_list);
//       //초기값 list와 같은 형태로 수정
//       return { list: new_ex_list };
//     }
//     default:
//       return state;
//   }
// }
