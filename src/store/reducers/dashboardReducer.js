import { List, Map, fromJS } from 'immutable';

import { getBooks } from '../../services/booksService';

const initialState = Map({
  books: List([])
});

const dashboardReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_BOOKS':
      return function(dispatch) {
        return getBooks().then((response) => {
          const books = fromJS(response.data);
          state.push(books);
        });
      };
    default:
      return state;
  }
};

export default dashboardReducer;
