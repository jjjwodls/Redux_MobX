import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from './actions/post';
import { logIn, logOut } from './actions/user';
import { createSelector } from "@reduxjs/toolkit";

const userSlice = require('./reducers/user');

const priceSelector = (state) => state.user.prices;
const sumPriceSelector = createSelector( //5. 이걸 재사용하면 문제가 된다. 사용하고 싶다면 함수로 한번 더 감싸서 만들어준다. 공식문서 참조 필요.
  priceSelector,
  (prices) => prices.reduce((a,c) => a+c , 0)
); //4. 이렇게 함으로 써 rerender가 훨씬 적어짐. prices가 변경되면 다시 불려짐. 그리고 컴포넌트의 rerendering과는 무관해짐. 퍼포먼스가 좋아짐.

const outside = (dispatch) => () => { //curring으로 밖으로 빼서 사용 가능함. dispatch가 내부에 있어도.
  dispatch(logIn({
    id: 'jaess',
    password: '1234'
  }));
}


function App() {

  const user = useSelector((state) => state.user); //state는 initailState
  //const posts = useSelector((state) => {state.posts}); //state는 initailState
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.user.prices);
  const [email, setEmail] = useState('');
  const totalPriceCreateSelector = useSelector(sumPriceSelector); // 3. 해당 값이 캐싱이 되므로 상관 없음.

  //setEmail로 rerender로 가격 연산은 rendering 될 때 마다 이뤄진다. 그래서 최적화를 해야함. 
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const totalPrices = useMemo(() => { 
    console.log('memo');
    return prices.reduce((a, b) => a + b, 0); // 1. 캐싱으로 얻는 효율이 생김.
  },[prices]) //2. but, 만약 prices가 계속 변경된다면 위 연산보다 더 부담스럴수도 있다. 이를 해결하기 위에 createSelector다.

  const onClick = useCallback(() => { 
    dispatch(logIn({
      id: 'jaess',
      password: '1234'
    }))
  }, []);

  const onClick2 = useCallback(outside(dispatch),[]); // 의존성 주입 가능함.

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut()); //toolkit이 알아서 logout action을 생성해준다.
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, [])

  return (
    <div>
      {user.isLogginIn ? <div>로그인중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요.'}
      {!user.data ? <button onClick={onClick}>로그인</button>
        : <button onClick={onLogout}>로그아웃</button>}
      <button onClick={onAddPost}>게시글 작성</button>
      <div>
        <b>{totalPrices} 원</b>

        <p><b>{totalPriceCreateSelector} 원</b></p>
        
      </div>
      <div>
        <input type='text' value={email} onChange={changeEmail} />
      </div>
    </div>
  );
}

export default App;
