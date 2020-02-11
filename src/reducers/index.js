const initialState = {
  note: [],
  twitter: [],
  article: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
