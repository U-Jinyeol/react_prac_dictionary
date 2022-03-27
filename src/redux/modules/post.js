// post.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions 타입 "모듈명/어떤액션"
const CREATE = "post/CREATE";
const LOAD = "post/LOAD";

//초기값
const initialState = {
  list: [],
};

// Action Creators
// 키:밸류 값이 같으면 밸류값을 생략할 수 있음
// ex. weidget:widget => widget

export function loadPost(post_list) {
  console.log("액션 로드");
  return { type: LOAD, post_list };
}

export function createPost(post) {
  console.log("액션 크리에이트");
  return { type: CREATE, post: post };
}

//middlewarese
export const loadPostFB = () => {
  return async function (dispatch) {
    const post_data = await getDocs(collection(db, "dictionary"));
    let post_list = [];
    post_data.forEach((doc) => {
      post_list.push({ id: doc.id, ...doc.data() });
    });

    console.log(post_list);
    const date_post_list = post_list.sort((a, b) => {
      return b.date - a.date;
    });
    dispatch(loadPost(date_post_list));
  };
};

//middlewarese
export const addPostFB = (post) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), post);
    const post_data = { id: docRef.id, ...post };
    dispatch(createPost(post_data));
    console.log(docRef);
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    //어떤 케이스인지 써주기
    case "post/LOAD": {
      return { list: action.post_list };
    }
    case "post/CREATE": {
      console.log("값 변경");
      //변경 될 값이 들어갈 새로운 변수 선언
      //새로운 변수는 수정 값을 적어줘야하는데 ...으로 복사하고
      //action의 bucket(수정되는 값)으로 변경한다는 의미
      const new_post_list = [...state.list, action.post];
      // new_post_list.unshift(action.post);
      //초기값 list와 같은 형태로 수정
      return { list: new_post_list };
    }
    default:
      return state;
  }
}
