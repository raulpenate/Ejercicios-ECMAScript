import axios from 'axios';
import { Movie } from '../types/types';

const API_URL = 'http://localhost:4000/movies';


// Create a new movie
export const addMovie = async (movie: Movie): Promise<Movie> => {
  const response = await axios.post<Movie>(API_URL, movie);
  return response.data;
};

// Get all movies
export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(API_URL);
  return response.data;
};

// Get a movie by ID
export const getMovieById = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(`${API_URL}/${id}`);
  return response.data;
};

// Update a movie
export const updateMovie = async (movie: Movie): Promise<Movie> => {
  const response = await axios.put<Movie>(`${API_URL}/${movie.id}`, movie);
  return response.data;
};

// Delete a movie
export const deleteMovie = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
