import React from 'react';
import logo from './logo.png';

function Footer() {
  return (
    <footer style={{backgroundColor:'#f6f6f6', height:'100px'}}>
      <center>
      <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }}/>
      <p>&copy; 2015 Tatvasoft.com.All rights reserved.</p>
      </center>
    </footer>
  );
}

export default Footer;
