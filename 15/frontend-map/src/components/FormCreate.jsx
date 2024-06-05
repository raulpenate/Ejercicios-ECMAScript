import { Grid, TextField, Button, Box, Typography, Alert } from '@mui/material';
import { postFlota } from '../api/api';
import { useState } from 'react';
import { getCoordinates } from '../api/mapbox';

export const FormCreate = () => {
  const [nombre, setNombre] = useState('');
  const [ubicacionInicial, setUbicacionInicial] = useState({ lat: '', lon: '' });
  const [ubicacionFinal, setUbicacionFinal] = useState({ latF: '', lonF: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleUbicacionInicialChange = async (event) => {
    const { lat, lon } = await getCoordinates(event.target.value);
    console.log('Ubicacion inicio', lat, lon);
    setUbicacionInicial({ lat, lon });
  };

  const handleUbicacionFinalChange = async (event) => {
    const { lat, lon } = await getCoordinates(event.target.value);
    console.log('Ubicacion final', lat, lon);
    setUbicacionFinal({ latF: lat, lonF: lon });
  };

  const saveFlota = async () => {
    try {
      const data = {
        nombre: nombre,
        ubicacion: ubicacionInicial,
        ubicacionFinal: ubicacionFinal
      };
      await postFlota(data);
      setSuccessMessage('Se agregó la flota correctamente');
    } catch (error) {
      setErrorMessage('Hubo un error al agregar la flota');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Registrar flota
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              required
              onChange={handleNombreChange}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="Ubicación Inicial"
              variant="outlined"
              required
              onChange={handleUbicacionInicialChange}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="Ubicación Final"
              variant="outlined"
              required
              onChange={handleUbicacionFinalChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" onClick={saveFlota}>
              Registrar
            </Button>
          </Grid>

          {successMessage && (
            <Grid item xs={12}>
              <Alert variant="filled" severity="success">
                {successMessage}
              </Alert>
            </Grid>
          )}

          {errorMessage && (
            <Grid item xs={12}>
              <Alert variant="filled" severity="error">
                {errorMessage}
              </Alert>
            </Grid>
          )}

        </Grid>
      </Box>
    </>
  );
};
