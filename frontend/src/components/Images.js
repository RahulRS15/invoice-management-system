import React from 'react';
import invoice from '../assets/invoice.png';
import '../style.css'; 

function Images() {
  return (
    <div className="image-container">
      <img src={invoice} alt="Invoice" className="invoice-image" />
    </div>
  );
}

export default Images;
