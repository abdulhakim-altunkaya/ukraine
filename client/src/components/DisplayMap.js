import React, { useState, useEffect } from 'react';
import MapComponent from './subcomponents/MapComponent';
//We will get focus coordianates from Zustand and Zustand will grab it from MainNews component news clicks
import useStore from '../store/useStore';

const DisplayMap = () => {

    //Get the coordinates before the useEffect 
    const zustandLatitude = useStore((state) => state.latitude);
    const zustandLongitude = useStore((state) => state.longitude);
    const zustandZoomLevel = useStore((state) => state.zoomLevel);

    const [dynamicLat, setDynamicLat] = useState(zustandLatitude);
    const [dynamicLon, setDynamicLon] = useState(zustandLongitude);
    const [dynamicZoom, setDynamicZoom] = useState(zustandZoomLevel);

    useEffect(() => {
        setDynamicLat(parseFloat(zustandLatitude));
        setDynamicLon(parseFloat(zustandLongitude));
        setDynamicZoom(Number(zustandZoomLevel));
        // Perform any additional actions you need when the values change
    }, [zustandLatitude, zustandLongitude, zustandZoomLevel]);

    return (
        <div className='mapContainerDiv'>
            {/* Pass the updated latitude and longitude to the MapComponent */}
            <MapComponent latitude={dynamicLat} longitude={dynamicLon} zoomLevel={dynamicZoom} />
        </div>
    );
};

export default DisplayMap;
