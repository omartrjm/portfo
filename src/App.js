import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';




function App() {
  return (
    <div className="App">
      
      <Navbar/>      
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
