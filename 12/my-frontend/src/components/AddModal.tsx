import React, { useState, useEffect } from 'react';
import { Movie } from '../types/types';
import { updateMovie } from '../service/apiService';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  onAddMovie?: (newMovie: Movie) => Promise<void>;
  onUpdateMovie?: (updatedMovie: Movie) => Promise<void>;
  movie?: Movie;
}

const Modal = ({ isOpen, toggleModal, onAddMovie, onUpdateMovie, movie }: ModalProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [protagonist, setProtagonist] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');


  const handleOnUpdate = async (updatedMovie: Movie) => {
    try { 
      await updateMovie(updatedMovie);
    } catch (error) {
      console.error('Error updating movie', error);
    }
  };

  const isEditMode = !!onUpdateMovie;

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setProtagonist(movie.protagonist);
      setCategory(movie.category);
      setUrl(movie.url);
    }
  }, [movie]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newMovie: Movie = {
        id: movie?.id || '',
        title,
        protagonist,
        category,
        url,
      };

      if (isEditMode) {
        await handleOnUpdate(newMovie); // Pass the newMovie directly
      } else if (onAddMovie) {
        await onAddMovie(newMovie);
      }

      setTitle('');
      setProtagonist('');
      setCategory('');
      setUrl('');

      toggleModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="crud-modal"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-75"
          aria-hidden={!isOpen}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isEditMode ? 'Editar' : 'Agregar'} película
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre de la película
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Título"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="protagonist"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Protagonista
                    </label>
                    <input
                      type="text"
                      name="protagonist"
                      id="protagonist"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Nombre"
                      value={protagonist}
                      onChange={(e) => setProtagonist(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Categoría
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Seleccionar categoría
                      </option>
                      <option value="Sci-Fi">Sci-Fi</option>
                      <option value="Drama">Drama</option>
                      <option value="Acción">Acción</option>
                      <option value="Crimen">Crimen</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="url"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      URL
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-slate-900 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-green-700 dark:focus:ring-green-900"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {isEditMode ? 'Editar' : 'Agregar'} película
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
