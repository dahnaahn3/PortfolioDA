
import './App.css';

import Navbar from './components/Navbar.js'
import Coverpage from './components/Coverpage'
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
      <Skillz />
      <Contact />
    </div>
    </>
  );
}

export default App;
