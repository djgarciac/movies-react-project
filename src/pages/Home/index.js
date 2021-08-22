import React, { useState } from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = () => {};

  const handleSearchTextClick = () => {};

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>Bienvenido</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
        />

        <Grid>
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
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default Home;
