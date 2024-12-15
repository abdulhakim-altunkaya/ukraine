// src/store/useStore.js
import { create } from 'zustand'; // Use named import

const useStore = create((set) => ({
  // New state for latitude and longitude
  latitude: 45.3794, // Default value
  longitude: 31.1656, // Default value
  zoomLevel: 6,

  // Setter for latitude
  setLatitude: (newLatitude) => set({ latitude: newLatitude }),
  // Setter for longitude
  setLongitude: (newLongitude) => set({ longitude: newLongitude }),
  // Setter for zoom level on the map
  setZoomLevel: (newZoom) => set({ zoomLevel: newZoom }),
}));

export default useStore;
