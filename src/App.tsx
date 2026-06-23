import { useState, useEffect } from 'react';
import { HashRouter, useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

const routes = [
  { path: '/', element: <Home /> },
];

function AppContent() {
  const location = useLocation();
  const element = useRoutes(routes, location);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>{element}</div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
