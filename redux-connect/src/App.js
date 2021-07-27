import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from './actions/post';
import { logIn, logOut } from './actions/user';

const userSlice = require('./reducers/user');

function App() {

  const user = useSelector((state) => state.user); //state는 initailState
  //const posts = useSelector((state) => {state.posts}); //state는 initailState
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logIn({
      id :'jaess',
      password : '1234'
    }))
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut()); //toolkit이 알아서 logout action을 생성해준다.
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  },[])

  return (
    <div>
      {user.isLogginIn ? <div>로그인중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요.'}
      {!user.data ? <button onClick={onClick}>로그인</button> 
      : <button onClick={onLogout}>로그아웃</button>}
    <button onClick={onAddPost}>게시글 작성</button>
    </div>
  );
}

export default App;
