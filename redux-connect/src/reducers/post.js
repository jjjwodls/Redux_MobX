const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post')


const initialState = {
  data : [],
};


const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: { //동기적 액션 및 내부적인 액션

  },
  extraReducers: { //비동기 액션 및 외부적인 액션
    [addPost.pending](state, action) {
    },
    [addPost.fulfilled](state, action) {
    },
    [addPost.rejected](state, action) {
    }
  }
})


module.exports = postSlice;