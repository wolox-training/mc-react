const routesReducer = (state = 'DASHBOARD', action = {}) => components[action.type] || state;

const components = {
  DASHBOARD: 'Dashboard',
  BOOK_DETAIL: 'BookDetail',
  LOGIN: 'Login'
};

export default routesReducer;
