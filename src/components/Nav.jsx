"use client";
import { headerLogo } from '../../public/images';
import { navLinks } from '../constants';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [theme, setTheme] = useState('dark');
    const [mobileOpen, setMobileOpen] = useState(false);

    // Read prefers-color-scheme and keep it in sync (only runs on client)
    useEffect(() => {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');

        // initial
        setTheme(mq.matches ? 'dark' : 'light');

        // subscribe
        if (mq.addEventListener) {
        mq.addEventListener('change', handleChange);
        } else if (mq.addListener) {
        mq.addListener(handleChange);
        }

        return () => {
        if (mq.removeEventListener) {
            mq.removeEventListener('change', handleChange);
        } else if (mq.removeListener) {
            mq.removeListener(handleChange);
        }
        };
    }, []);

    // Apply theme class to document (client only)
    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    
      // Function to toggle between themes
      const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };

      const toggleMobile = () => setMobileOpen((s) => !s);
      const closeMobile = () => setMobileOpen(false);

      // shared text formatting for links (applied to desktop + mobile)
      const linkTextClass = "font-ibm leading-normal text-lg text-slate-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-300 transition-colors";

    return (

    <header className="padding-x py-6 absolute z-50 w-full bg-gradient-to-b from-cyan-600 dark:from-gray-800">
        <nav className="flex justify-between items-center max-container gap-4">
            <a href="/" className="flex items-center" aria-label="Home">
                <img 
                    src={headerLogo.src}
                    alt="Logo"
                    width={80}
                    height={80}
                />
            </a>
            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className={linkTextClass}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Desktop theme toggle */}
            <div className="flex max-lg:hidden items-center gap-3">
              <button id="toggleDark" onClick={toggleTheme} className="pl-2 block dark:hidden" aria-label="Toggle dark mode">
                  <FontAwesomeIcon icon={faMoon} size="lg" />
              </button>
              <button id="toggleDark" onClick={toggleTheme} className="pl-2 hidden dark:block" aria-label="Toggle light mode">
                  <FontAwesomeIcon icon={faSun} size="lg" style={{color: "#ffffff"}} />
              </button>
            </div>

            {/* Hamburger for small screens */}
            <button
                className="ml-4 block lg:hidden text-slate-900 dark:text-gray-200"
                onClick={toggleMobile}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
            >
                <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} size="lg" />
            </button>
        </nav>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-200 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          aria-hidden={!mobileOpen}
        >
          {/* backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeMobile}
          />

          {/* slide-in panel */}
          <div
            className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-200 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <a href="/" onClick={closeMobile} className="flex items-center">
                  <img src={headerLogo.src} alt="Logo" width={56} height={56} />
                </a>
                <button onClick={closeMobile} aria-label="Close menu" className="text-slate-900 dark:text-gray-200">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobile}
                    className={`py-3 px-4 rounded-md ${linkTextClass} hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto">
                <button onClick={() => { toggleTheme(); /* keep menu open to let user see change */ }} className="font-ibm w-full flex items-center justify-center gap-3 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-gray-200">
                  <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

    </header>
  )
}

export default Nav