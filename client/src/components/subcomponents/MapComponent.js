import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/map.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS

const MapComponent = ({ latitude, longitude }) => {
    const mapRef = useRef(null); // Reference for the map container

    useEffect(() => {
        if (!mapRef.current) {
            // Initialize the map if it hasn't been created yet
            const map = L.map('map').setView([latitude, longitude], 9); // Adjust zoom level for a broader view

            // Carto Voyager tiles
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 19,
            }).addTo(map);        
            
            // Create a custom icon using FontAwesome
            const customIcon = L.divIcon({
                className: 'custom-div-icon', // Custom class for styling
                html: '<i class="fas fa-map-marker-alt" style="color: red; font-size: 32px;"></i>', // FontAwesome icon
                iconSize: [30, 42], // Optional size of the icon
                iconAnchor: [15, 42], // Anchor point of the icon
            });

            // Add marker at initial position with the custom icon
            const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
            mapRef.current = { map, marker };
        } else {
            // Update map view and marker position when coordinates change
            const { map, marker } = mapRef.current;
            map.setView([latitude, longitude], 9); // Adjust zoom level for a broader view
            marker.setLatLng([latitude, longitude]);
        }
    }, [latitude, longitude]);

    return <div id="map" ></div>;
};

export default MapComponent;
