import React from 'react';
import {Routes, Route} from "react-router-dom";
import DisplayNav from "./DisplayNav";
import DisplayMap from "./DisplayMap";
import About from "./subcomponents/About";
import Donation from "./subcomponents/Donation";

function MainMapNav() {
  return (
    <div className='mainMapNav'>
      <DisplayNav/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="*" element={<DisplayMap />} />
      </Routes>
      
    </div>
  )
}

export default MainMapNav;