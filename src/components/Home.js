import React from 'react';
// import LaBanner from "../images/LaBanner2.png";
// import {  Outlet } from 'react-router-dom';
import Logo from '../images/logo.png';
import Header from './nav/Header';

const Home = () => {
  return (
    <div className='w-full h-screen bg-banner'>
    
      <div className='z-10 relative '>
        <Header logo={Logo} height={'45rem'} width={'45rem'} /> 
      </div>
    </div>
  )
}

export default Home