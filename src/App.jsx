import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-dark-900">
        {/* Header/Navbar */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Awards & Achievements Section */}
        <Awards />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
