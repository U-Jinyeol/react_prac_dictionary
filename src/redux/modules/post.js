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
const DELETE = "post/DELETE";
const UPDATE = "post/UPDATE";

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

export function deletePost(post_id) {
  console.log("액션 딜리트");
  return { type: DELETE, post_id };
}

export function checkPost(post_index) {
  console.log("액션 체크");
  return { type: UPDATE, post_index };
}

//middlewarese
export const loadPostFB = () => {
  return async function (dispatch) {
    const post_data = await getDocs(collection(db, "mydictionary"));
    let post_list = [];
    post_data.forEach((doc) => {
      post_list.push({ id: doc.id, ...doc.data() });
    });

    const date_post_list = post_list.sort((a, b) => {
      return b.date - a.date;
    });
    dispatch(loadPost(date_post_list));
  };
};

//middlewarese
export const addPostFB = (post) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mydictionary"), post);
    const post_data = { id: docRef.id, ...post };
    dispatch(createPost(post_data));
  };
};

//middlewarese
export const deletePostFB = (post_id) => {
  return async function (dispatch) {
    const docRef = doc(db, "mydictionary", post_id);
    await deleteDoc(docRef);
    dispatch(deletePost(post_id));
  };
};

//middlewarese
export const checkPostFB = (post_id) => {
  //getState는 저장된 전체 값을 불러옴
  return async function (dispatch, getState) {
    const docRef = await doc(db, "mydictionary", post_id);
    (await getDoc(docRef)).data().bool === false
      ? updateDoc(docRef, { bool: true })
      : updateDoc(docRef, { bool: false });

    const _post_list = getState().post.list;
    const post_index = _post_list.findIndex((b) => {
      return b.id === post_id;
    });
    console.log(post_index);
    dispatch(checkPost(post_index));
  };
};

// middlewarese
// export const updatePostFB = (post_id) => {
//   //getState는 저장된 전체 값을 불러옴
//   return async function (dispatch, getState) {
//     const docRef = doc(db, "mydictionary", post_id);
//     await updateDoc(docRef, {});

//     const _post_list = getState().post.list;
//     const post_index = _post_list.findIndex((b) => {
//       return b.id === post_id;
//     });
//     dispatch(updatePost(post_index));
//   };
// };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    //어떤 케이스인지 써주기
    case "post/LOAD": {
      return { list: action.post_list };
    }

    case "post/DELETE": {
      const new_post_list = state.list.filter((e) => {
        return action.post_id !== e.id;
      });
      return { list: new_post_list };
    }

    case "post/UPDATE": {
      const check_list = state.list.map((e, i) => {
        if (action.post_index === i) {
          if (e.bool === false) {
            return { ...e, bool: true };
          } else {
            return { ...e, bool: false };
          }
        } else {
          return e;
        }
      });
      console.log(check_list);
      return { list: check_list };
    }

    // case "post/CREATE": {
    //   console.log("값 변경");
    //   //변경 될 값이 들어갈 새로운 변수 선언
    //   //새로운 변수는 수정 값을 적어줘야하는데 ...으로 복사하고
    //   //action의 bucket(수정되는 값)으로 변경한다는 의미
    //   const new_post_list = [...state.list];
    //   new_post_list.unshift(action.post);
    //   //초기값 list와 같은 형태로 수정
    //   return { list: new_post_list };
    // }
    default:
      return state;
  }
}
