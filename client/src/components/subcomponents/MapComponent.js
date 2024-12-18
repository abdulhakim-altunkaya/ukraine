import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/map.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS

const geoJsonFiles = [
    { name: 'Region 1', file: require('../geojson/region1.json'), color: 'red', border: false },
    { name: 'Region 2', file: require('../geojson/region2.json'), color: 'blue', border: true },
    { name: 'Region 3', file: require('../geojson/region3.json'), color: 'red', border: false },
];

const MapComponent = ({ latitude, longitude, zoomLevel }) => {
    const mapRef = useRef(null); // Reference for the map container
    const mapInstanceRef = useRef(null); // Reference for the Leaflet map instance

    useEffect(() => {
        if (!mapInstanceRef.current) {
            // Initialize the map instance
            const map = L.map(mapRef.current).setView([latitude, longitude], zoomLevel);

            // Add base tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(map);
            

            // Dynamically load GeoJSON files
            geoJsonFiles.forEach(({ name, file, color, border }) => {
                L.geoJSON(file, {
                    style: {
                        color: border ? color : 'transparent', // Border color (transparent for no border)
                        fillColor: color, // Fill color
                        fillOpacity: 0.5, // Transparency
                    },                    
                })
                    .bindPopup(name) // Optional: Display name of the region
                    .addTo(map);
            });

            mapInstanceRef.current = map; // Save the map instance
        } else {
            // Update the map view when props change
            mapInstanceRef.current.setView([latitude, longitude], zoomLevel);
        }
    }, [latitude, longitude, zoomLevel]);

    return <div id="map" ref={mapRef}></div>;
};

export default MapComponent;
