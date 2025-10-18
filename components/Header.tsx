
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const ToothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5,8c0,1.5-0.5,2.9-1.4,4H8.9C8,10.9,7.5,9.5,7.5,8c0-2.5,2-4.5,4.5-4.5S16.5,5.5,16.5,8z M18,8c0-3.9-3.1-7-7-7S4,4.1,4,8c0,2.1,0.8,4.1,2.2,5.5C5,14.6,4.3,16,4.3,17.5c0,1.4,0.6,2.6,1.5,3.5c-0.3,0.2-0.5,0.6-0.5,1c0,0.6,0.4,1,1,1h9.5c0.6,0,1-0.4,1-1c0-0.4-0.2-0.8-0.5-1c0.9-0.9,1.5-2.2,1.5-3.5c0-1.5-0.7-2.9-1.9-4.1C17.2,12.1,18,10.1,18,8z"/>
  </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ToothIcon className="w-8 h-8 text-primary" />
            <a href="#home" className="text-2xl font-bold text-secondary">
              عيادتي
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-block bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105">
              احجز موعداً
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-4 p-6">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-gray-700 hover:text-primary transition-colors duration-300 w-full text-center py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105 w-full text-center">
              احجز موعداً
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
