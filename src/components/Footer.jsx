// Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',

    bottom: '0',
    width: '100%',
  };

  return (
    <>
    <div style={footerStyle}>
      <p>&copy; 2023 Sri Velu Enterprises. All rights reserved.</p>
    </div>
    </>
  );
};

export default Footer;
