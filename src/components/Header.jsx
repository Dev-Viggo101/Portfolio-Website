import React, { useEffect, useState } from 'react';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode)
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <nav className={`${isDarkMode ? 'bg-purple-700' : 'bg-purple-700'} w-full md:w-6/12 mx-auto md:h-14 md:my-6 rounded-2xl border-solid drop-shadow-lg`}>
        
        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-24 text-xl text-white font-serif justify-center">
          <button id='toggleButton' onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
          </button>
          <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
            <a href="#Home" onClick={closeMenu}>Home</a>
          </li>
          <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
            <a href="#About" onClick={closeMenu}>About</a>
          </li>
          <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
            <a href="#Projects" onClick={closeMenu}>Projects</a>
          </li>
          <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
            <a href="#Contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex justify-between items-center p-4">
          
          <div className="flex items-center">
            <div className={`hamburger space-y-2 cursor-pointer`} onClick={toggleMenu}>
              <span className="block w-8 h-1 bg-white"></span>
              <span className="block w-8 h-1 bg-white"></span>
              <span className="block w-8 h-1 bg-white"></span>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className={`${isDarkMode ? 'bg-purple-700' : 'bg-purple-700'} flex flex-col items-center text-white text-xl font-serif py-4`}>
            <button id='toggleButton' onClick={toggleTheme}>
                {isDarkMode ? '🌙' : '☀️'}
            </button>
            <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
              <a href="#Home" onClick={closeMenu}>Home</a>
            </li>
            <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
              <a href="#About" onClick={closeMenu}>About</a>
            </li>
            <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
              <a href="#Projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="my-4 hover:border-b-2 hover:border-b-white hover:text-lg hover:duration-150 hover:animate-pulse">
              <a href="#Contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
