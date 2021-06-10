const initalState = [];

const postReducer = (prevState = initalState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        data: [...prevState, action.data]
      }
    default: {
      return prevState;
    }
  }
}



module.exports = postReducer;