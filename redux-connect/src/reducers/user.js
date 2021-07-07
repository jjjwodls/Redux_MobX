//immer를 적용하여 기존 prevState를 계속 유지하는 spread문법을 제거.
const { createSlice } = require('@reduxjs/toolkit');
const { logIn } = require('../actions/user');

const initialState = {
  isLogginIn: false,
  data: null
}

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : { //동기적 액션 및 내부적인 액션
    logOut(state,action){
      state.data = null;
    }
  },
  extraReducers : { //비동기 액션 및 외부적인 액션(로딩, 성공, 실패에 대한 문법이 정해져 있음.)
    //로딩중 : user/logIn/pending
    [logIn.pending](state,action){ //객체 다이나믹 문법?? 
      state.isLogginIn = true;
    },
    //성공 : user/logIn/fulfilled
    [logIn.fulfilled](state,action){
      state.data = action.payload; //action.data가 payload로 넘어옴.
      state.isLogginIn = false;
    },
    //실패 : user/logIn/rejected
    [logIn.rejected](state,action){
      state.data = null; 
      state.isLogginIn = false;
    }
  } 
})

module.exports = userSlice;