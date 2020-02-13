import { GET_BOOKS } from '../types';
const initialState = {
  books: []
};

const getBooks = (state, payload) => ({
  ...state,
  books: payload
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return getBooks(state, payload);
    default:
      return state;
  }
};
