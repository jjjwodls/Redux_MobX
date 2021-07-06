const initalState = {
  isLogginIn: false,
  data: null
}

const userReducer = (prevState = initalState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...prevState,
        isLogginIn : true
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...prevState,
        data: action.data,
        isLogginIn : false
      };
    case 'LOG_IN_FAILURE':
      return {
        ...prevState,
        data: null,
        isLogginIn : false
      };
    case 'LOG_IN':
      return {
        ...prevState,
        data: action.data
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        data: null
      };
    default: {
      return prevState;
    }
  }
}

module.exports = userReducer;