
import './App.css';

import Navbar from './components/Navbar.js'
import Coverpage from './components/Coverpage'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects';
import Aboutme from './components/Aboutme'


function App() {
  return (
    <>
    <div>
      <Navbar />

      <Coverpage />
      <Aboutme />
      <Projects />
      <Skills />

      <Contact />
    </div>
    </>
  );
}

export default App;
