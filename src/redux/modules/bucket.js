// bucket.js

// Actions 타입 "파일명/모듈명/어떤액션"
// const LOAD = "my-app/widgets/LOAD";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";
const CREATE = "my-app/bucket/CREATE";

//초기값
const initialState = {
  list: ["영화간 가기", "매일 책 읽기", "수영 배우기"],
};

// Action Creators
// 키:밸류 값이 같으면 밸류값을 생략할 수 있음
// ex. weidget:widget => widget
export function creatBucket(bucket) {
  return { type: CREATE, bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    //어떤 케이스인지 써주기
    case "bucket/CREAT": {
      //변경 될 값이 들어갈 새로운 변수 선언
      //새로운 변수는 수정 값을 적어줘야하는데 ...으로 복사하고
      //action의 bucket(수정되는 값)으로 변경한다는 의미
      const nwe_bucket_list = [...state.list, action.bucket];
      //초기값 list와 같은 형태로 수정
      return { list: nwe_bucket_list };
    }
    default:
      return state;
  }
}
