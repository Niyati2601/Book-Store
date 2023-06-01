import React, { useContext, useState } from 'react';
import { BrowserRouter as Routepaths, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import SearchBar from './Components/SearchBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import MainNavigation from './Components/MainNavigation';

const App = () => {
  
  return (
    
      <div>
        <ToastContainer />
        <Navbar />
        <SearchBar />

      <MainNavigation />
        <br />
        <Footer />
      </div>
     
  );
};

export default App;
