//리듀스가 전부 묶어서(combine) 만드는 store
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import post from "./modules/post";

//미들웨어 청크
const middlewares = [thunk];

//리듀서들의 묶음을 통상적으로 rootReducer라고 함
//리듀서가 여러개면 중괄호 안에 ,로 더 적어준다. ex. bucket, bucket2 ...
const rootReducer = combineReducers({ post });

//리듀서 말고 추가로 묶어줄 모음
const enhancer = applyMiddleware(...middlewares);

//스토어를 만들고 그안에 리듀서의 묶음을 넣어준다
const store = createStore(rootReducer, enhancer);

export default store;
