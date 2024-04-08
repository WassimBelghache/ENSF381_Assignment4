import './App.css';
import React from 'react';
import LoginPage from './component/LoginPage';
import Homepage from './component/HomePage.js';
import Productpage from './component/ProductPage.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;