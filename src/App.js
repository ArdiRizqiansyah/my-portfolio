import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container relative mx-auto max-w-6xl px-4 md:px-8 lg:px-28 xl:px-0 pb-4 pt-16 xl:py-8">
      <Navbar />

      <div className="lg:pb-32" id='about'>
        <Hero />
      </div>
      <div className='pt-28' id='skill'>
        <Skill />
      </div>
      <div className='pt-28' id='project'>
        <Project />
      </div>
      <div className='pt-28 pb-10' id='experience'>
        <Experience />
      </div>

      <Footer />
    </div>
  );
}

export default App;
