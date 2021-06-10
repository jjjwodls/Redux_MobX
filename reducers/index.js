const { combineReducers } = require('redux')
const userReducer = require('./user'); //하나의 module만 export 하는데, 여러 모듈 export 하는 방식으로 작성하여 동작이 잘 안됨.
const postReducer = require('./post');


module.exports = combineReducers({
  user: userReducer,
  posts: postReducer
});