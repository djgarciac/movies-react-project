import React, { useState } from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import styles from './style';
import { MovieIcon } from '../../icons';

const Home = ({history}) => {
  const [searchText, setSearchText] = useState('');
  const classes = styles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = () => {
    setSearchText('');
  };

  const handleSearchTextClick = () => {
    history.push(`/results?movieName=${searchText}`)
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          className={classes.textFieldSearch}
          onChange={handleSearchTextChange}
        />

        <Grid className={classes.buttonsContainer}>
          <Button
            type="button"
            variant="contained"
            onClick={handleCleanTextClick}
          >
            Limpiar
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default Home;
