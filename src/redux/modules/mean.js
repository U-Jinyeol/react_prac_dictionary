// // mean.js

// const CREATE = "mean/CREATE";

// //초기값
// const initialState = {
//   list: ["의미1", "의미2", "의미3", "의미4"],
// };

// // Action Creators
// // 키:밸류 값이 같으면 밸류값을 생략할 수 있음
// // ex. weidget:widget => widget
// export function createMean(mean) {
//   console.log("액션 의미");
//   console.log(mean);
//   return { type: CREATE, mean: mean };
// }

// // Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     //어떤 케이스인지 써주기
//     case "mean/CREATE": {
//       console.log("의미 변경");
//       //변경 될 값이 들어갈 새로운 변수 선언
//       //새로운 변수는 수정 값을 적어줘야하는데 ...으로 복사하고
//       //action의 bucket(수정되는 값)으로 변경한다는 의미
//       const new_mean_list = [...state.list, action.mean];
//       console.log(new_mean_list);
//       //초기값 list와 같은 형태로 수정
//       return { list: new_mean_list };
//     }
//     default:
//       return state;
//   }
// }
