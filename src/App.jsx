import React, { useState, useEffect } from 'react';
import './cars.css';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Load dark mode preference from localStorage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark-mode') {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
    localStorage.setItem('mode', newMode ? 'dark-mode' : 'light-mode');
  };

  // Toggle sidebar open/close
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Toggle search box visibility
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.sidebarOpen') && !e.target.closest('.menu') && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [sidebarOpen]);

  return (
    <nav className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="nav-bar">
        {/* Sidebar Toggle Icon */}
        <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar}></i>
        <span className="logo navLogo"><a href="#">Veloxio</a></span>

        {/* Sidebar Menu */}
        <div className={`menu ${sidebarOpen ? 'active' : ''}`}>
          <div className="logo-toggle">
            <span className="logo"><a href="#">Veloxio</a></span>
            <i className="bx bx-x sidebarClose" onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">View Gallery</a></li>
            <li><a href="#">Login/Sign Up</a></li>
          </ul>
        </div>

        {/* Dark Mode & Search Box */}
        <div className="darkLight-searchBox">
          <div className="dark-light" onClick={toggleDarkMode}>
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
          </div>

          <div className="searchBox">
            <div className="searchToggle" onClick={toggleSearch}>
              <i className={`bx ${searchOpen ? 'bx-x cancel' : 'bx-search search'}`}></i>
            </div>

            {searchOpen && (
              <div className="search-field">
                <input type="text" placeholder="Search..." />
                <i className="bx bx-search"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
