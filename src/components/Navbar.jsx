import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          {/* <Link to="/">MyApp</Link> */}
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
