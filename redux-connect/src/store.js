const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');
const reducer = require('./reducers');

const firstMiddleWare = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  //기능추가 가능. dispatch 전 후로 기능 추가가 가능하다.
  dispatch(action); //dispatch action 한것이 reducer로 전달된다.
  //기능추가 가능.
  console.log("액션 끝\n");
};

const store = configureStore({
  reducer,
  middleware : [firstMiddleWare, ...getDefaultMiddleware()],
  devTools : process.env.NODE_ENV !== 'production',
});

module.exports = store;


