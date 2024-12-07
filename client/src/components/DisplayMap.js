import React, { useState, useEffect } from 'react';
import MapComponent from './subcomponents/MapComponent';

const DisplayMap = ({ userLatitude2, userLongitude2 }) => {
    const [latitude, setLatitude] = useState(56.9496); // Default latitude (Riga)
    const [longitude, setLongitude] = useState(24.1052); // Default longitude

    useEffect(() => {
        // Update latitude and longitude whenever props change
        if (userLatitude2 !== null && userLongitude2 !== null) {
            setLatitude(userLatitude2);
            setLongitude(userLongitude2);
        }
    }, [userLatitude2, userLongitude2]);

    return (
        <div className='mapContainerDiv'>
            {/* Pass the updated latitude and longitude to the MapComponent */}
            <MapComponent latitude={latitude} longitude={longitude} />
        </div>
    );
};

export default DisplayMap;
