import './App.css';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Testimonial from './Components/Testimonial';
import Works from './Components/Works';
import { useState } from 'react'

function App() {

  const [mode,  setMode] = useState(true)

  const View = (e) => {
    setMode(e)
  }
  return (
    <div className="App">
      <Sidebar View={View} mode={mode} />
      <Routes>
        <Route exact path="/" element={<Home dark={mode} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/testimonial" element={<Testimonial />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
