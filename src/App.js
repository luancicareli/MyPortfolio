import Banner from './components/Banner';
import Content from './components/Content';
import Navbar from './components/Navbar';
import ProjectBox from './components/Projects';
import Rodape from './components/Rodape';
import SkillUp from './components/Skills';
import React from 'react';
import { Element } from 'react-scroll';


function App() {

  const prjs = [
    {
      name: 'MyPortfolio',
      path: 'https://github.com/luancicareli/MyPortfolio',
      desc: 'Projeto desenvolvido com React, com objetivo de criar um portfólio pessoal para divulgação de projetos', 
      logo: '/images/projects/myport.png'
    },
    {
      name: 'AppTeams',
      path: 'https://github.com/luancicareli/AppTeams',
      desc: 'Projeto desenvolvido com React, com o intuito de treinar o uso de diversos componentes', 
      logo: '/images/projects/appTeam.png'
    },
    {
      name: 'MidSound',
      path: 'https://github.com/luancicareli/MidSound',
      desc: 'Projeto desenvolvido em HTML e JS com intuito de executar uma função acionada pela interação do usuário', 
      logo: '/images/projects/midsound.png'
    },
    {
      name: 'Robotron',
      path: 'https://github.com/luancicareli/Robotron',
      desc: 'Projeto desenvolvido em HTML, CSS e JS para manipulação dos elementos de forma dinâmica', 
      logo: '/images/projects/robotron.png'
    },
    {
      name: 'SendForm',
      path: 'https://github.com/luancicareli/SendForm',
      desc: 'Projeto desenvolvido com HTML, CSS e JavaScript com intuito enviar todos valores e receber um status de feedback', 
      logo: '/images/projects/sendform.png'
    },
    {
      name: 'MoniBank',
      path: 'https://github.com/luancicareli/MoniBank',
      desc: 'Projeto desenvolvido para validação de formulário através do JavaScript', 
      logo: '/images/projects/monibank.png'
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
        <ProjectBox projects={prjs} />
        <Rodape/>
      </div>
  );
}

export default App;
