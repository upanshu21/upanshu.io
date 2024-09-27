import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Timeline from './components/Timeline';
import About from './components/About';
import NavBar from './components/Navbar';


function AppContent() {
  const timelineRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '/' && timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (timelineTop <= windowHeight / 2) {
        if (location.hash !== '#') {
          window.history.replaceState(null, '', '#');
        }
      } else {
        if (location.hash !== '') {
          window.history.replaceState(null, '', '#');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div>
      <NavBar ref={timelineRef}/>
      <HomePage />
      <Timeline ref={timelineRef} />
      <About/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
