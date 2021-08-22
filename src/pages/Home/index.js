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

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const classes = styles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = () => {};

  const handleSearchTextClick = () => {};

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
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
            variant="contained"
            onClick={handleCleanTextClick}
          >
            Limpiar
          </Button>
          <Button
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
