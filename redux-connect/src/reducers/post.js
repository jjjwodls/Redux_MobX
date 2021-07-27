const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post')


const initialState = {
  data : [],
};


const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: { //동기적 액션 및 내부적인 액션
    clearPost(state,action){
      state.data = [];
    },
  },
  extraReducers: (builder) => builder  //비동기 액션 및 외부적인 액션
    //state자체에 할때는 state=123 return state; 를 통해 직접 불변성을 해준다.
    .addCase(addPost.pending,(state, action) => {
    })
    .addCase(addPost.fulfilled,(state, action) => { //builder를 사용하여 addCase 로 사용함. (switch 문 비슷하게 사용 가능함.)
      state.data.push(action.payload);
    })
    .addCase(addPost.rejected,(state, action) =>{
    })
    .addMatcher((action) => { //해당 패턴에 대해서만 처리 가능하다.
      return action.type.includes('/pending');
      //state.isLoading = true;
    },(state,action) => {
      state.isLoading = true;
    })
    .addDefaultCase((state,action)=>{

    })
  }
)


module.exports = postSlice;