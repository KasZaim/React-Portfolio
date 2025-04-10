import React, { useEffect, useRef } from 'react';
import './index.scss';

const Map = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (!mapInstance.current && mapRef.current) {
            // Initialize the map
            mapInstance.current = L.map(mapRef.current).setView([53.7557, 9.6534], 12);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance.current);

            // Add a marker
            markerRef.current = L.marker([53.7557, 9.6534])
                .addTo(mapInstance.current)
                .bindPopup('Elmshorn')
                .openPopup();
        }

        // Cleanup function
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return (
        <div className="map-container">
            <div ref={mapRef} className="map"></div>
        </div>
    );
};

export default Map; 