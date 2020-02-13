import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { getBooks } from '../redux/actions';

function Home({ books, getBooks }) {
  useEffect(() => {
    getBooks();
  }, [getBooks]);
  return (
    <>
      <Typography variant="h1" align="center">
        Home
      </Typography>
      <Typography variant="body1" align="center">
        {JSON.stringify(books, null, 2)}
      </Typography>
    </>
  );
}

const mapStateToProps = state => ({
  books: state.books.books
});
const mapDispatchToProps = { getBooks };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
