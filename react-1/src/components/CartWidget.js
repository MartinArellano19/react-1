// src/components/NavBar/CartWidget.js
import React from 'react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center text-white">
      <i className="bi bi-cart3 me-2" style={{ fontSize: '1.5rem' }}></i>
      <span>3</span>
    </div>
  );
};

export default CartWidget;
