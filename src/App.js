import "./App.css";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualifcation from "./components/Qualifcation/Qualifcation";
import Testimonials from "./components/testimonials/Testimonials";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifcation />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
