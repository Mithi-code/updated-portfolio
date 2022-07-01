import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path="about" element={<About />} />
        <Route path="skill" element={<Skill />} />
        <Route path="portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;