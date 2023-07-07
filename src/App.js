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
      link: 'projects/appTeams/index.html',
      desc: 'Projeto desenvolvido com React, com o intuito de treinar o uso de componentes',
      logo: 'projects/appTeams/images/appTeam.png'
    },
    {
      name: 'Project2',
      link: '',
      desc: 'Projeto desenvolvido com React',
      logo: '/images/skills/javascript.png'
    },
    {
      name: 'Project3',
      link: '',
      desc: 'Projeto desenvolvido com React',
      logo: '/images/skills/javascript.png'
    }
  ]

  const skls = [
    {
      name: 'Bootstrap',
      link: 'https://getbootstrap.com',
      logo: '/images/skills/bootstrap.png'
    },
    {
      name: 'Corel Draw',
      link: 'https://www.coreldraw.com',
      logo: '/images/skills/coreldraw.png'
    },
    {
      name: 'CSS3',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      logo: '/images/skills/css3.png'
    },
    {
      name: 'Figma',
      link: 'https://www.figma.com',
      logo: '/images/skills/figma.png'
    },
    {
      name: 'Git',
      link: 'https://git-scm.com',
      logo: '/images/skills/git.png'
    },
    {
      name: 'GitHub',
      link: 'https://github.com',
      logo: '/images/skills/github.png'
    },
    {
      name: 'HTML5',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      logo: '/images/skills/html5.png'
    },
    {
      name: 'Java',
      link: 'https://www.java.com',
      logo: '/images/skills/java.png'
    },
    {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      logo: '/images/skills/javascript.png'
    },
    {
      name: 'Jquery',
      link: 'https://jquery.com',
      logo: '/images/skills/jquery.png'
    },
    {
      name: 'Laravel',
      link: 'https://laravel.com',
      logo: '/images/skills/laravel.png'
    },
    {
      name: 'MySQL',
      link: 'https://www.mysql.com',
      logo: '/images/skills/mysql.png'
    },
    {
      name: 'Photoshop',
      link: 'https://www.adobe.com/br/products/photoshop',
      logo: '/images/skills/photoshop.png'
    },
    {
      name: 'PHP',
      link: 'https://www.php.net',
      logo: '/images/skills/php.png'
    },
    {
      name: 'React',
      link: 'https://react.dev',
      logo: '/images/skills/react.png'
    },
    {
      name: 'Wordpress',
      link: 'https://wordpress.com',
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
