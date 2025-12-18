import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
