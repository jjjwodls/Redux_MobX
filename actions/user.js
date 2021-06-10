const logIn = (data) => { //async action creator (비동기 이므로 함수를 리턴)
  return (dispatch, getState) => {
    dispatch(loginRequest(data));
    try {
      setTimeout(() => {
        dispatch(loginSuccess({
          userId: 1,
          nickName: 'jaess'
        })
        );
      }, 2000); //비동기 액션을 넣어준다.  
    } catch (e) {
      dispatch(logInFailure(e))
    }
  };
}

const loginRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  }
}

const loginSuccess = () => {
  return {
    type: 'LOG_IN_SUCCESS'
  }
}

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error
  }
}

// 주석처리 동기방식.
// const logIn = (data) => { //action creator (동기식이라 객체를 리턴한다.)
//   return {
//     type: 'LOG_IN',
//     data,
//   }
// }

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}

module.exports = {
  logIn,
  logOut,
}