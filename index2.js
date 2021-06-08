const { createStore } = require("redux");
const reducer = require('./reducers');
const { addPost} = require('./actions/post');
const { logIn, logOut } = require('./actions/user');

const initalState = {
  user : {
    isLogginIn : true,
    data : null
  },
  posts : [], // 덩치가 커질만한 것들은 밖으로 빼주는게 좋다.
  comments : [], 
  // post 밑으로 comment로 들어 갈 수 있지만, post 생성마다 comment가 생성되므로 불필요함.
  favorites : [],
  history : [],
  likes : [],
  followers : [],
}

const store = createStore(reducer, initalState);

store.subscribe( () => {
  console.log("change render"); //react-redux에 기본으로 들어있다. 실제 잘 사용 안함.
});
console.log('1',store.getState());

 

console.log('2',store.getState());

