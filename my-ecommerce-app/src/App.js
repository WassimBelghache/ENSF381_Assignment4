import './App.css';
import React from 'react';
import LoginPage from './component/LoginPage';
import Homepage from './component/HomePage.js';
import Productpage from './component/ProductPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Homepage />} />
      <Route path = '/Login' element={<LoginPage />} />
      <Route path = '/Products' element={<Productpage />} />
    </Routes>
    </BrowserRouter>
  );}

export default App;