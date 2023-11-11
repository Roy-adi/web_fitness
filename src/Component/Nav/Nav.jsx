import React, { useState } from 'react';
import './Nav.css'
import  logo  from '../../assets/logo.jpg'
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${showMenu ? 'open' : ''}`}>
      <nav className="navbar">
        <div className="nav-sec">
          <div className="brand">
            <img src= {logo} alt='logo' />
          </div>
          <div className="toggle" onClick={toggleMenu}>
            <span className={`toggle-btn ${showMenu ? 'open' : ''}`}></span>
          </div>
          <div className={`menu ${showMenu ? 'open' : ''}`}>
            <ul className={`menu-list ${showMenu ? 'open' : ''}`}>
              <li className={`menu-item ${showMenu ? 'open' : ''}`}>
                <a href="#" className="menu-link">Home</a>
              </li>
              <li className={`menu-item ${showMenu ? 'open' : ''}`}>
                <a href="#" className="menu-link">About</a>
              </li>
              <li className={`menu-item ${showMenu ? 'open' : ''}`}>
                <a href="#" className="menu-link">Works</a>
              </li>
              <li className={`menu-item ${showMenu ? 'open' : ''}`}>
                <a href="#" className="menu-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
