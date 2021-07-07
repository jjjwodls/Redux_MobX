//action은 전부 비동기 액션의 공간이 된다. thunk를 사용

const { createAsyncThunk } = require('@reduxjs/toolkit');

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
}) // 가짜 delay api 호출하는것처럼 함수 생성.

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => { //createAsyncThunk 에서는 try catch를 사용하지 말자. rejected 형태로 안감. 
  //axios 같은 내용을 작성해주면 된다. pending,fulfilled,rejected (thunk 에서 사용하는 용어)
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: 'jaessJang'
  });
  return result;
});


// 주석처리 동기방식.
// const logIn = (data) => { //action creator (동기식이라 객체를 리턴한다.)
//   return {
//     type: 'LOG_IN',
//     data,
//   }
// }

module.exports = {
  logIn
}