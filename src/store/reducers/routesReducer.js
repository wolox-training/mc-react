
const routesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'DASHBOARD':
       return 'dashboard'
    case 'BOOK_DETAIL':
       return 'bookDetail'
  }
  return state;
};

export default routesReducer;
