import React from 'react';

const UnderConstructionPage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
    backgroundColor: '#f2f2f2', // Adjust the background color as needed
  };

  const messageStyle = {
    textAlign: 'center',
    fontSize: '24px', // Adjust the font size as needed
    color: '#333', // Adjust the text color as needed
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={messageStyle}>Page Under Construction</h1>
        <p style={messageStyle}>We are still working on it. Check back later!</p>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
