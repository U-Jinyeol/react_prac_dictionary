// Post.js

// Actions 타입 "파일명/모듈명/어떤액션"
// const LOAD = "my-app/widgets/LOAD";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";
const CREATE = "post/CREATE";

//초기값
const initialState = {
  list: ["리덕스사용중", "매일 책 읽기", "수영 배우기", "코딩하기"],
};

// Action Creators
// 키:밸류 값이 같으면 밸류값을 생략할 수 있음
// ex. weidget:widget => widget
export function createPost(post) {
  console.log("액션");
  console.log(post);
  return { type: CREATE, post: post };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    //어떤 케이스인지 써주기
    case "post/CREATE": {
      console.log("값 변경");
      //변경 될 값이 들어갈 새로운 변수 선언
      //새로운 변수는 수정 값을 적어줘야하는데 ...으로 복사하고
      //action의 bucket(수정되는 값)으로 변경한다는 의미
      const new_post_list = [...state.list, action.post];
      console.log(new_post_list);
      //초기값 list와 같은 형태로 수정
      return { list: new_post_list };
    }
    default:
      return state;
  }
}
