import React, { useState } from 'react';
import Homepage from './component/Homepage';
import ProductPage from './component/ProductPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' && <Homepage navigateTo={navigateTo} />}
      {currentPage === 'product' && <ProductPage navigateTo={navigateTo} />}
    </div>
  );
}

export default App;
