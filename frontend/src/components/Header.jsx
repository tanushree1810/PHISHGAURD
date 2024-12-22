import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import light from '../assets/light.png';
import dark from '../assets/dark.png';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // if token exists, user is logged in
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      toggleDropdown();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // clear the token
    setIsLoggedIn(false); // update login state
    navigate('/'); // redirect to home
  };

  return (
    <header>
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <img src={logo} alt="App Logo" className="w-10 h-10 mr-2" />
          <Link
            to="/"
            className="text-2xl font-semibold text-black hover:text-gray-700"
            onClick={() => handleLinkClick('/')}
          >
            PhishGuard
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm text-gray-700">
          {['/', '/report', '/browse', '/about', '/faq', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 ${activeLink === path ? 'text-black' : 'hover:text-black'}`}
              onClick={() => handleLinkClick(path)}
            >
              <p>{path.replace('/', '').toUpperCase() || 'HOME'}</p>
              {activeLink === path && <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />}
            </Link>
          ))}
        </div>

        {/* Profile and Theme Toggle */}
        <div className="flex items-center space-x-6">
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={handleProfileClick}
              className="text-black hover:text-gray-700 flex items-center"
            >
              <img src={profile} alt="Profile" className="w-6 h-6 rounded-full mr-2" />
              Profile
            </button>
            {isLoggedIn && isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                {['/user-profile', '/safe-access-center'].map((path, index) => (
                  <Link
                    key={index}
                    to={path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    {path.replace('/', '').replace('-', ' ')}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-black hover:text-gray-700 flex items-center">
            <img src={darkMode ? light : dark} alt="Theme Toggle" className="w-6 h-6 mr-2" />
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
