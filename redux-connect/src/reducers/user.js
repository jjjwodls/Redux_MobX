//immer를 적용하여 기존 prevState를 계속 유지하는 spread문법을 제거.
const produce = require('immer');

const initalState = {
  isLogginIn: false,
  data: null
}

//nextState = produce(preState, (draft) => {})

const userReducer = (prevState = initalState, action) => {
  return produce(prevState,(draft) => {
    switch (action.type) {
      case 'LOG_IN_REQUEST':
        draft.data = null;
        draft.isLogginIn = true;
        break;
      case 'LOG_IN_SUCCESS':
        draft.data = action.data;
        draft.isLogginIn = false;
        break;
      case 'LOG_IN_FAILURE':
        draft.data = null;
        draft.isLogginIn = false;
        break;
      case 'LOG_IN':
        draft.isLogginIn = true;
        draft.data = action.data;
        break;
      case 'LOG_OUT':
        draft.data = null;
        break;
      default: {
        break;
      }
    }
  })
}

module.exports = userReducer;