import React from 'react';
import Donation from "./subcomponents/Donation";
import About from "./subcomponents/About";
import {useNavigate} from "react-router-dom";
//We will use zustand to store latitude and longitude information. 
//then map component will get this data and update the map accordingly
//Each time a person click on homepage text here, zustand state will change and consequently the map will change. 
import useStore from '../store/useStore'; 


function DisplayNav() {
  const navigate = useNavigate();

  const setLatitude = useStore((state) => state.setLatitude);
  const setLongitude = useStore((state) => state.setLongitude);
  const setZoomLevel = useStore((state) => state.setZoomLevel);

  const goHomepage = () => {
    const parsedLatitude = parseFloat(45.3794);
    const parsedLongitude = parseFloat(31.1656);
    setLatitude(parsedLatitude);
    setLongitude(parsedLongitude);
    setZoomLevel(6);//higher zoom levels are more detailed map
    navigate("/");
  }

  return (
    <div className='navContainerDiv'>
      <div className='navTitleButton' onClick={goHomepage}>UKRAINE Control Map</div>
      <div className='navAboutButton' onClick={ () => navigate("/about")}><About /></div>
      <div className='navDonationButton' onClick={ () => navigate("/donation")}><Donation /></div>
    </div>
  )
}

export default DisplayNav