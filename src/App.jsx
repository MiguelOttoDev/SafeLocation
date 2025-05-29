import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cidade from './pages/Cidade';
import "leaflet/dist/leaflet.css";
import Refugios from './pages/Refugios';
import NotFound from './pages/NotFound';
import Busca from './pages/Busca';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city" element={<Cidade />} />
            <Route path="/refugios" element={<Refugios/>} />
            <Route path="/busca" element={<Busca/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
