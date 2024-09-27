// src/components/HomePage.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from './profile.jpg'; // Ensure the path is correct
import ReactTypingEffect from 'react-typing-effect';


const HomePage = () => {
  console.log('HomePage component rendered');

  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHello(true);
    }, 500); // 0.5-second delay for the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex-1 flex flex-col items-center justify-center pt-20 px-4">
        {/* "Hello There" Animation */}
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000 ${
            showHello ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Hello There!
        </h1>

        {/* Central Image */}
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Welcome Message */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center">
        <ReactTypingEffect
            text="Welcome! Feel free to scroll around and explore my work!"
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorClassName="text-gray-700"
          />        
          </p>
      </header>
    </div>
  );
};

export default HomePage;
