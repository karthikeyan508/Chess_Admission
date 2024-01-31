import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/UserPage.css';

function UserPage() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="header-container">
        <div id="siteinfo"></div>
      </div>
      <div className={`navbar-container ${showMenu ? 'show-menu' : ''}`}>
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
        <div className={`menu-dropdown ${showMenu ? 'show' : ''}`}>
          <Link className="nav-link" to="/courses">CoursesPage</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
        
          <Link className="nav-link" to="/login">Logout</Link>
        </div>
       
      </div>
      <div className="main-content">
      
      <h1>Chess Academy </h1>
        {/* <h2>Welcome to Chess Academy!</h2> */}
        <p>
          Explore our chess courses, learn from experienced coaches, and elevate your chess skills.
        </p>
        
        <section className="featured-courses">

          <h3>Featured Courses</h3>
          <div className="course-card">
          
            <h4>Mastering Openings</h4>
            <img
            src="https://getwallpapers.com/wallpaper/full/3/0/5/1016217-chess-wallpaper-3840x2160-for-ipad-2.jpg"
            alt="About Chess Academy 1"
            style={{ width: '500px', height: '500px', borderRadius: '10px', marginBottom: '20px',height:'200px' }}
          />
            <p>Unlock the secrets of powerful chess openings with our expert instructors.</p>
          </div>
          <div className="course-card">
            <h4>Endgame Strategies</h4>
            <img
            src="https://img.freepik.com/premium-photo/chess-game-chess-pieces-board-darck-background-ai-generation_201606-4546.jpg"
            alt="About Chess Academy 1"
            style={{ width: '500px', height: '500px', borderRadius: '10px', marginBottom: '20px',height:'200px' }}
          />
            <p>Learn endgame techniques to secure victory in challenging chess situations.</p>
          </div>
        </section>

        {/* Add more content sections or components as needed */}
      </div>
    </div>
  );
}

export default UserPage;
