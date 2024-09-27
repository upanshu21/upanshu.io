// src/components/HomePage.jsx

import React from 'react';

const HomePage = () => {
    console.log('HomePage component rendered');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My App</h1>
          <p className="text-xl mb-8">A brief description of your app goes here.</p>
          <a
            href="/timeline"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
          >
            View Timeline
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 flex-1">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Add some content here about your app or company. You can describe features, services, or
            anything you like.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p className="text-gray-700">Description of feature one.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p className="text-gray-700">Description of feature two.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
              <p className="text-gray-700">Description of feature three.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
