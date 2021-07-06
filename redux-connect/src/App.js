import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from './actions/user';

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
    dispatch(logOut());
  }, []);

  return (
    <div>
      {user.isLogginIn ? <div>로그인중</div> : user.data ? <div>{user.data.nickName}</div> : '로그인 해주세요.'}
      {!user.data ? <button onClick={onClick}>로그인</button> 
      : <button onClick={onLogout}>로그아웃</button>}
    </div>
  );
}

export default App;
