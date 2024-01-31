// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
      {/* <svg id="logo-38" width="80" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg> */}
        <div className="header">
          <h1>CHESS ACADEMY </h1>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
