import Hamburger from 'hamburger-react'
import './menu.css';
import { useState } from 'react';



const Ham = () => {

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  const scrollToTarget = (event) => {
    event.preventDefault();
  
    const href = event.target.getAttribute('href');
    const targetElement = document.querySelector(href);
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (event) => {

    toggleMenu();
    
    scrollToTarget(event);

  };
  

  return (
    <>
      <div className="menuToggle" >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={isOpen ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <div className="listItems">
            <ul>
              <li><a onClick={handleClick} href="#home">Home</a></li>
              <li><a onClick={handleClick} href="#about">Sobre mim</a></li>
              <li><a onClick={handleClick} href="#skillUp">Habilidades</a></li>
              <li><a onClick={handleClick} href="#projects">Projetos</a></li>
              <li><a onClick={handleClick} href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ham;
