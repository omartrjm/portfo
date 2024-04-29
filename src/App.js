import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';



function App() {
  return (
    <div className="App">
      
      <Navbar/>      
      <Hero/>
      <Skills/>
      <About/>
    </div>
  );
}

export default App;
