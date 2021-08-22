import React from 'react'
import { Container } from '@material-ui/core';

const Results = ({ location }) => {
  const querystring = new URLSearchParams(location.search)
  console.log(querystring.get('movieName'));

  return (
    <Container>
      Results
    </Container>
  );
};

export default Results;
