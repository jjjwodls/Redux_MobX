const { combineReducers } = require('redux')
const userSlice = require('./user');  //리듀서와 action을 하나로 그룹화해서 만들자.
const postSlice = require('./post');


module.exports = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer
});