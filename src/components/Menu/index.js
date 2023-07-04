import Hamburger from 'hamburger-react'
import './menu.css';
import { useState } from 'react';



const Ham = () => {

  const [isOpen, setOpen] = useState(false);



  return (
    <>
      <div className="menuToggle" >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={isOpen ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <div className="listItems">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre mim</a></li>
              <li><a href="#skillUp">Habilidades</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ham;
