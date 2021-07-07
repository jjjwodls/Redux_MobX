const { createStore, applyMiddleware, compose } = require("redux");
const reducer = require('./reducers');
const { composeWithDevTools } = require('redux-devtools-extension');

const initalState = {
  user: {
    isLogginIn: false,
    data: null
  },
  posts: [], // 덩치가 커질만한 것들 + 배열이 같은것은 밖으로 빼주는게 좋다.
  comments: [],
  // post 밑으로 comment로 들어 갈 수 있지만, post 생성마다 comment가 생성되므로 불필요함.
  favorites: [],
  history: [],
  likes: [],
  followers: [],
}

// const enhancer = compose(
//   applyMiddleware(),
//    reactDevTools 등 
// ); //compose로 함수를 합성해서 사용할 수 있도록 한다.

const firstMiddleWare = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  //기능추가 가능. dispatch 전 후로 기능 추가가 가능하다.
  dispatch(action); //dispatch action 한것이 reducer로 전달된다.
  //기능추가 가능.
  console.log("액션 끝\n");
};

// function firstMiddleWare(store){ 위 동작과 같음. 중간 함수 사이에서 무언가를 하고 싶을 때 사용함.
//   return function(next){
//     return function(action){
// 
//     }
//   }
// }

//3단 함수가 미들웨어이고 기능은 앞 뒤로 추가해주면 된다. 리덕스 thunk 실제 라이브러리 모습.
//currying 방식으로 함수형으로 연결되어 있다.
const thunkMiddleWare = (store) => (dispatch) => (action) => {
  //비동기인 경우에는 action을 함수로 넣어주겠다.
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState); //이 값이 어디로 전달되는지 확인해보자.
  }
  return dispatch(action);
}


const enhancer = composeWithDevTools(applyMiddleware(
  firstMiddleWare,
  thunkMiddleWare
  ),
  // typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

const store = createStore(reducer, initalState, enhancer);

// console.log('1', store.getState());
// store.dispatch(logIn(
//   {
//     id: 1,
//     name: 'jaess',
//     admin: true
//   }
// ))

module.exports = store;


