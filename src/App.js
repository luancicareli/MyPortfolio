import Banner from './components/Banner';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Rodape from './components/Rodape';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Content/>
      <Skills/>
      <Projects/>
      <Rodape/>
    </div>
  );
}

export default App;
