import {
  Grid, TextField, Button, Box, Typography, Autocomplete, InputAdornment, FormControl, FormHelperText, OutlinedInput, CircularProgress
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getFlota } from '../api/api';
import { getCoordinates, getPlaceName } from '../api/mapbox';
import useLocationStore from '../store/locationStore';
import { putFlota } from '../api/api';

const estado = [
  { nombre: 'En ruta' },
  { nombre: 'Sin ruta' }
];

export const FormEdit = () => {
  const [flota, setFlota] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFlota, setSelectedFlota] = useState(null);
  const [ubicacionInicial, setUbicacionInicial] = useState('');
  const [ubicacionFinal, setUbicacionFinal] = useState('');
  const [selectedEstado, setSelectedEstado] = useState(null);
  const [kilometraje, setKilometraje] = useState('');
  const [velocidad, setVelocidad] = useState('');
  const [gasolina, setGasolina] = useState('');

  const setUbicacionInicialGlobal = useLocationStore((state) => state.setUbicacion);
  const setUbicacionFinalGlobal = useLocationStore((state) => state.setUbicacionFinal);

  const loadFlota = async () => {
    const data = await getFlota();
    setFlota(data);
    setLoading(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadFlota()
      } catch (error) {
        console.error('Error fetching flota data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNombre = async (event, value) => {
    try {
      if (value) {
        console.log(value.id);
        setSelectedFlota(value);

        const current = flota.find((v) => v.id === value.id);

        if (current && current.ubicacion) {
          const { ubicacion: { lat, lon }, ubicacionFinal: { latF, lonF }, rendimiento: { gas, kilometraje: km, velocidad: vel }, estado: est } = current;

          console.log('object', current);

          if (lat && lon) {
            console.log('se busca inicio', lat, lon);
            const data = await getPlaceName(lat, lon);
            console.log('ubicacion inicio', data);
            setUbicacionInicial(data);
            setUbicacionInicialGlobal(lat, lon);
          }

          if (latF && lonF) {
            console.log('se busca final', latF, lonF);
            const data = await getPlaceName(latF, lonF);
            console.log('ubicacion final', data);
            setUbicacionFinal(data);
            setUbicacionFinalGlobal(latF, lonF);
          }

          if (gas) {
            setGasolina(gas)
          }

          if (km) {
            setKilometraje(km)
          }

          if (vel) {
            setVelocidad(vel)
          }

          if (est) {
            console.log('estado: ', est);
            const data = estado.find((e) => e.nombre == est)
            console.log(data);
            setSelectedEstado(data)
            console.log('selected es', selectedEstado)
          }
        }

      } else {
        setSelectedFlota(null);
        setUbicacionInicial('');
      }
    } catch (e) {
      console.error('Error', e);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { lat, lon } = await getCoordinates(ubicacionInicial);
    const ubicacion = {
      lat,
      lon
    }

    const { lat: latF, lon: lonF } = await getCoordinates(ubicacionFinal);
    const ubicacionFinalF = {
      latF,
      lonF
    }

    const formData = {
      nombre: selectedFlota.nombre,
      ubicacion,
      ubicacionFinal: ubicacionFinalF,
      estado: selectedEstado.nombre,
      rendimiento: {
        kilometraje,
        velocidad,
        gas: gasolina
      }
    };

    try {
      if (selectedFlota) {
        setLoading(true);
        const updatedFlota = await putFlota(selectedFlota.id, formData);
        console.log('Updated flota:', updatedFlota);
        await loadFlota()
      }
    } catch (error) {
      console.error('Error updating flota:', error);
    }
  };

  if (loading) {
    return (<CircularProgress color="success" />);
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Modificar flota
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Autocomplete
              fullWidth
              disablePortal
              id="flota-select"
              options={flota}
              getOptionLabel={(option) => option.nombre}
              onChange={handleNombre}
              renderInput={(params) => <TextField {...params} label="Flota" required />}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <Autocomplete
              fullWidth
              value={selectedEstado}
              disablePortal
              id="estado-select"
              options={estado}
              getOptionLabel={(option) => option.nombre}
              onChange={(event, value) => setSelectedEstado(value)}
              renderInput={(params) => <TextField {...params} label="Estado" required />}
            />
          </Grid>

          <Grid item xs={12} sm={1}>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="kilometraje"
                endAdornment={<InputAdornment position="end">km</InputAdornment>}
                aria-describedby="kilometraje-helper-text"
                value={kilometraje}
                onChange={(event) => setKilometraje(event.target.value)}
                inputProps={{
                  'aria-label': 'kilometraje',
                }}
              />
              <FormHelperText id="kilometraje-helper-text">Kilometraje</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={1}>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="velocidad"
                endAdornment={<InputAdornment position="end">km/h</InputAdornment>}
                aria-describedby="velocidad-helper-text"
                value={velocidad}
                onChange={(event) => setVelocidad(event.target.value)}
                inputProps={{
                  'aria-label': 'velocidad',
                }}
              />
              <FormHelperText id="velocidad-helper-text">Velocidad</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={1}>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="gasolina"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                aria-describedby="gasolina-helper-text"
                value={gasolina}
                onChange={(event) => setGasolina(event.target.value)}
                inputProps={{
                  'aria-label': 'gasolina',
                }}
              />
              <FormHelperText id="gasolina-helper-text">Gasolina</FormHelperText>
            </FormControl>
          </Grid>


          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Ubicación inicial"
              variant="outlined"
              required
              value={ubicacionInicial}
              onChange={(event) => setUbicacionInicial(event.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Ubicación final"
              variant="outlined"
              required
              value={ubicacionFinal}
              onChange={(event) => setUbicacionFinal(event.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};