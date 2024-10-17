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
      logo: `${process.env.PUBLIC_URL}/images/projects/myport.png'`
    },
    {
      name: 'AppTeams',
      path: 'https://github.com/luancicareli/AppTeams',
      desc: 'Projeto desenvolvido com React, com o intuito de treinar o uso de diversos componentes', 
      logo: `${process.env.PUBLIC_URL}/images/projects/appTeam.png'`
    },
    {
      name: 'MidSound',
      path: 'https://github.com/luancicareli/MidSound',
      desc: 'Projeto desenvolvido em HTML e JS com intuito de executar uma função acionada pela interação do usuário', 
      logo: `${process.env.PUBLIC_URL}/images/projects/midsound.png'`
    },
    {
      name: 'Robotron',
      path: 'https://github.com/luancicareli/Robotron',
      desc: 'Projeto desenvolvido em HTML, CSS e JS para manipulação dos elementos de forma dinâmica', 
      logo: `${process.env.PUBLIC_URL}/images/projects/robotron.png'`
    },
    {
      name: 'SendForm',
      path: 'https://github.com/luancicareli/SendForm',
      desc: 'Projeto desenvolvido com HTML, CSS e JavaScript com intuito enviar todos valores e receber um status de feedback', 
      logo: `${process.env.PUBLIC_URL}/images/projects/sendform.png'`
    },
    {
      name: 'MoniBank',
      path: 'https://github.com/luancicareli/MoniBank',
      desc: 'Projeto desenvolvido para validação de formulário através do JavaScript', 
      logo: `${process.env.PUBLIC_URL}/images/projects/monibank.png'`
    }
  ]

  const skls = [
    {
      name: 'Bootstrap',
      link: 'https://getbootstrap.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/bootstrap.png'`
    },
    {
      name: 'Corel Draw',
      link: 'https://www.coreldraw.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/coreldraw.png'`
    },
    {
      name: 'CSS3',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      logo: `${process.env.PUBLIC_URL}/images/skills/css3.png'`
    },
    {
      name: 'Figma',
      link: 'https://www.figma.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/figma.png'`
    },
    {
      name: 'Git',
      link: 'https://git-scm.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/git.png'`
    },
    {
      name: 'GitHub',
      link: 'https://github.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/github.png'`
    },
    {
      name: 'HTML5',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      logo: `${process.env.PUBLIC_URL}/images/skills/html5.png'`
    },
    {
      name: 'Java',
      link: 'https://www.java.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/java.png'`
    },
    {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      logo: `${process.env.PUBLIC_URL}/images/skills/javascript.png'`
    },
    {
      name: 'Jquery',
      link: 'https://jquery.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/jquery.png'`
    },
    {
      name: 'Laravel',
      link: 'https://laravel.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/laravel.png'`
    },
    {
      name: 'MySQL',
      link: 'https://www.mysql.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/mysql.png'`
    },
    {
      name: 'NextJS',
      link: 'https://nextjs.org/',
      logo: `${process.env.PUBLIC_URL}/images/skills/next.png'`
    },
    {
      name: 'Photoshop',
      link: 'https://www.adobe.com/br/products/photoshop',
      logo: `${process.env.PUBLIC_URL}/images/skills/photoshop.png'`
    },
    {
      name: 'PHP',
      link: 'https://www.php.net',
      logo: `${process.env.PUBLIC_URL}/images/skills/php.png'`
    },
    {
      name: 'React',
      link: 'https://react.dev',
      logo: `${process.env.PUBLIC_URL}/images/skills/react.png'`
    },
    {
      name: 'Tailwind',
      link: 'https://tailwindcss.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/tailwind.png'`
    },
    {
      name: 'Wordpress',
      link: 'https://wordpress.com',
      logo: `${process.env.PUBLIC_URL}/images/skills/wordpress.png'`
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
