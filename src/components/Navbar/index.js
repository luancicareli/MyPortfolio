import Ham from '../Menu';
import Swt from '../Switch';
import Logo from '../Logo';
import './navbar.css';
import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scroll' : ''}`}>
        <div className="navbar_hamburger"><Ham/></div>
        <div className="navbar_logo"><Logo/></div>
        <div className="navbar_switch"><Swt/></div>
      </nav>
    </>
  );

};

export default Navbar;