import Banner from './components/Banner';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Rodape from './components/Rodape';
import SkillUp from './components/Skills';
import React from 'react';
import { Element } from 'react-scroll';


function App() {

  const prjs = [
    {
      name: 'Project1',
      desc: 'Projeto desenvolvido com React, com o intuito de treinar o uso de componentes',
      logo: '/images/skills/javascript.png'
    },
    {
      name: 'Project2',
      desc: 'Projeto desenvolvido com React',
      logo: '/images/skills/javascript.png'
    },
    {
      name: 'Project3',
      desc: 'Projeto desenvolvido com React',
      logo: '/images/skills/javascript.png'
    }
  ]

  const skls = [
    {
      name: 'Bootstrap',
      logo: '/images/skills/bootstrap.png'
    },
    {
      name: 'Corel Draw',
      logo: '/images/skills/coreldraw.png'
    },
    {
      name: 'CSS3',
      logo: '/images/skills/css3.png'
    },
    {
      name: 'Figma',
      logo: '/images/skills/figma.png'
    },
    {
      name: 'Git',
      logo: '/images/skills/git.png'
    },
    {
      name: 'GitHub',
      logo: '/images/skills/github.png'
    },
    {
      name: 'HTML5',
      logo: '/images/skills/html5.png'
    },
    {
      name: 'Java',
      logo: '/images/skills/java.png'
    },
    {
      name: 'JavaScript',
      logo: '/images/skills/javascript.png'
    },
    {
      name: 'Jquery',
      logo: '/images/skills/jquery.png'
    },
    {
      name: 'Laravel',
      logo: '/images/skills/laravel.png'
    },
    {
      name: 'MySQL',
      logo: '/images/skills/mysql.png'
    },
    {
      name: 'Photoshop',
      logo: '/images/skills/photoshop.png'
    },
    {
      name: 'PHP',
      logo: '/images/skills/php.png'
    },
    {
      name: 'React',
      logo: '/images/skills/react.png'
    },
    {
      name: 'Wordpress',
      logo: '/images/skills/wordpress.png'
    }
  ]

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Content/>
      <Element name="appElement">
        <SkillUp skills={skls}/>
      </Element>
      <Projects projects={prjs}/>
      <Rodape/>
    </div>
  );
}

export default App;
