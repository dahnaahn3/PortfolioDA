
import './App.css';

import Navbar from './components/Navbar.js'
import Coverpage from './components/Coverpage'
// import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects';
import Aboutme from './components/Aboutme'
import Skillz from './components/Skillz'


function App() {
  return (
    <>
    <div>
      <Navbar />

      <Coverpage />
      <Aboutme />
      <Projects />
      {/* <Skills /> */}
      <Skillz />

      <Contact />
    </div>
    </>
  );
}

export default App;
