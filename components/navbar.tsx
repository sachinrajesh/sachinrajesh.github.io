'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="text-2xl font-extrabold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            Sachin Rajesh
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Home
            </Link>
            <Link href="/projects" className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-[-4px] after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
