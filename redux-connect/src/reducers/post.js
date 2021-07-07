const initalState = [];
const produce = require('immer');

const postReducer = (prevState = initalState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case 'ADD_POST':
        draft.push(action.data);
        break;
      default: {
        break;
      }
    }
  });
}



module.exports = postReducer;