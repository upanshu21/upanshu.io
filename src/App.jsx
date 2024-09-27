// src/App.jsx

import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Timeline from './components/Timeline';

function AppContent() {
  const timelineRef = useRef(null);
  const location = useLocation();

  console.log('Current Path:', location.pathname);

  // Scroll to the timeline section when the path changes to '/timeline'
  useEffect(() => {
    if (location.pathname === '/timeline' && timelineRef.current) {
      console.log('Scrolling to Timeline');
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/') {
      // If path is '/', scroll to the top (homepage)
      console.log('Scrolling to Top');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Update the URL path based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      console.log('Scroll Position:', timelineTop, windowHeight);

      // If the top of the timeline section is within the upper half of the viewport
      if (timelineTop <= windowHeight / 2) {
        if (location.pathname !== '/timeline') {
          console.log('Updating URL to /timeline');
          window.history.replaceState(null, '', '#/timeline');
        }
      } else {
        if (location.pathname !== '/') {
          console.log('Updating URL to /');
          window.history.replaceState(null, '', '#/');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div>
      <HomePage />
      <Timeline ref={timelineRef} />
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
