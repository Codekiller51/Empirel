import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import MTech from './pages/MTech';
import Marketing from './pages/Marketing';
import Studio from './pages/Studio';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="m-tech" element={<MTech />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="studio" element={<Studio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;