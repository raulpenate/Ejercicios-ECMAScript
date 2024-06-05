import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});

export const getFlota = async () => {
  try {
    const response = await api.get('/flota');
    return response.data;
  } catch (error) {
    console.error('Error fetching flota:', error);
    throw error;
  }
};

export const postFlota = async ({nombre, ubicacion, ubicacionFinal}) => {
    console.log('HACIENDO PUT');
    console.log(nombre, ubicacion, ubicacionFinal);
  try {
    await api.post('/flota', { nombre, ubicacion, ubicacionFinal });
  } catch (error) {
    console.error('Error posting flota:', error);
    throw error;
  }
};

export const putFlota = async (id, {nombre, estado, ubicacion, ubicacionFinal, rendimiento}) => {
  try {
    const response = await api.put(`/flota/${id}`, { nombre, estado, ubicacion, ubicacionFinal, rendimiento });
    return response.data;
  } catch (error) {
    console.error('Error updating flota:', error);
    throw error;
  }
};