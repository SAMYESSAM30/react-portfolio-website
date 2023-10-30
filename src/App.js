
import './App.css';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
      </main>

    </>
  );
}

export default App;
