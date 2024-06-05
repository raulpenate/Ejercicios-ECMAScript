import { useEffect, useState } from 'react';
import { CrudButtons } from './components/CrudButtons';
import { MovieCard } from './components/MovieCard';
import { SearchBar } from './components/SearchBar';
import { getMovies, addMovie, deleteMovie, updateMovie } from './service/apiService';
import { Movie } from './types/types'; 

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const moviesData = await getMovies();
      console.log(moviesData);
      setMovies(moviesData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddMovie = async (newMovie: Movie) => {
    try {
      await addMovie(newMovie);
      await fetchMovies();
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const handleOnDelete = async(movieId: string) => {
    try{
      await deleteMovie(movieId);
      await fetchMovies();
    }catch(error){
      console.error('Error deleting movie', error)
    }
  }

  const handleOnUpdate = async (updatedMovie: Movie) => {
    try {
      console.log('Updating movie:', updatedMovie);
      await updateMovie(updatedMovie);
      await fetchMovies();
    } catch (error) {
      console.error('Error updating movie', error);
    }
  };
  
  
  return (
    <>
      {/* SearchBar */}
      <SearchBar onAddMovie={handleAddMovie} />
      {/* SearchBar */}

      {/* Cards */}
      <div className='grid grid-cols-5 md:grid-cols-5 gap-4 px-5'>
        {movies.map((movie) => (
          <div key={movie.id} className='card-wrapper  opacity-85 hover:opacity-100'>
            <MovieCard movie={movie} />
            <CrudButtons onDelete={() => handleOnDelete(movie.id!)} onUpdate={() => handleOnUpdate(movie)} movie={movie}/>
          </div>
        ))}
      </div>
      {/* Cards */}
    </>
  )
}
