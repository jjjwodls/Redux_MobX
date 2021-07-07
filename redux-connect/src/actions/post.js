const { createAsyncThunk } = require('@reduxjs/toolkit');

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
}) // 가짜 delay api 호출하는것처럼 함수 생성.

const addPost = createAsyncThunk('post/add', async () => { //createAsyncThunk 에서는 try catch를 사용하지 말자. rejected 형태로 안감. 
  return await delay(500, {
    title : '새 게시글',
    content : '내용이에요.'
  })
});

module.exports = {
  addPost
}