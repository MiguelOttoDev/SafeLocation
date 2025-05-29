import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { div } from 'framer-motion/client';
import Footer from './components/Footer';

function App() {

  return (
    
    <div className='bg-gray-100'>
      <Router>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
    
  )
}

export default App
