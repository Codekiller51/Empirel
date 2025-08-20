import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLoading } from './contexts/LoadingContext';
import LoadingScreen from './components/common/LoadingScreen';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import MTech from './pages/MTech';
import Marketing from './pages/Marketing';
import Studio from './pages/Studio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  const { isLoading, setIsLoading } = useLoading();
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Check if critical assets are loaded
    const checkAssetsLoaded = () => {
      // Check if fonts are loaded
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          setAssetsLoaded(true);
        });
      } else {
        // Fallback for browsers without font loading API
        setTimeout(() => setAssetsLoaded(true), 1000);
      }
    };

    // Start checking assets immediately
    checkAssetsLoaded();

    // Set minimum loading time to prevent flash
    const minLoadingTimer = setTimeout(() => {
      if (assetsLoaded) {
        setIsLoading(false);
      }
    }, 1500);

    return () => clearTimeout(minLoadingTimer);
  }, [setIsLoading]);

  useEffect(() => {
    // Once assets are loaded and minimum time has passed, hide loading
    if (assetsLoaded && !isLoading) {
      setIsLoading(false);
    }
  }, [assetsLoaded, isLoading, setIsLoading]);

  useEffect(() => {
    // Hide loading when assets are ready after minimum time
    if (assetsLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [assetsLoaded, setIsLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="m-tech" element={<MTech />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="studio" element={<Studio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;