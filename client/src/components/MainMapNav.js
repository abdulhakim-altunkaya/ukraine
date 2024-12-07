import React from 'react';
import DisplayNav from "./DisplayNav";
import DisplayMap from "./DisplayMap";

function MainMapNav() {
  return (
    <div className='mainMapNav'>
      <DisplayNav/>
      <DisplayMap userLatitude2={56.9496} userLongitude2={24.1052}/>
    </div>
  )
}

export default MainMapNav