import { GET_BOOKS } from '../types';

export const getBooks = () => async dispatch => {
  try {
    const url = '/books';
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const books = await response.json();
    if (response.ok) {
      dispatch({ type: GET_BOOKS, payload: books });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const addBook = book => async dispatch => {
  try {
    const url = '/books';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (response.ok) {
      dispatch(setAlert('Book have been saved!', 'success', 5000));
      dispatch(getBooks());
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const editBook = (id, book) => async dispatch => {
  try {
    const url = '/books/' + id;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (response.ok) {
      dispatch(setAlert('Book have been saved!', 'success', 5000));
      dispatch(getBooks());
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const deleteBook = id => async dispatch => {
  try {
    const url = '/books/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      dispatch(getBooks());
      dispatch(setAlert('Book have been Deleted!', 'success', 5000));
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};
