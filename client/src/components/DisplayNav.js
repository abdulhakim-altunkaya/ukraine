import React from 'react';
import Donation from "./subcomponents/Donation";
import About from "./subcomponents/About";
import {useNavigate} from "react-router-dom";


function DisplayNav() {
  const navigate = useNavigate();

  return (
    <div className='navContainerDiv'>
      <div className='navTitleButton' onClick={ () => navigate("/")}>UKRAINE Control Map</div>
      <div className='navAboutButton' onClick={ () => navigate("/about")}><About /></div>
      <div className='navDonationButton' onClick={ () => navigate("/donation")}><Donation /></div>
    </div>
  )
}

export default DisplayNav