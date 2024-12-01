import React from 'react';
import MainMapNav from "./MainMapNav";
import MainNews from "./MainNews";

function Main() {
  return (
    <div className='mainArea'>
        <MainMapNav />
        <MainNews />
    </div>
  )
}

export default Main