// locationStore.js
import create from 'zustand';

const useLocationStore = create((set) => ({
  ubicacion: {
    lat: 0,
    lon: 0,
  },
  ubicacionFinal: {
    lat: 0,
    lon: 0,
  },
  setUbicacion: (lat, lon) => set((state) => ({
    ubicacion: { ...state.ubicacion, lat, lon },
  })),
  setUbicacionFinal: (lat, lon) => set((state) => ({
    ubicacionFinal: { ...state.ubicacionFinal, lat, lon },
  })),
}));

export default useLocationStore;
