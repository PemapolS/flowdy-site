import { headerLogo } from '../../public/images';
import { navLinks } from '../constants';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [theme, setTheme] = useState('light');

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

    return (

    <header className="padding-x py-6 absolute z-50 w-full bg-gradient-to-b from-cyan-600 dark:from-gray-800">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
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
                            className="font-ibm leading-normal text-lg text-slate-900 dark:text-gray-200"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <button id="toggleDark" onClick={toggleTheme} className="pl-10 block dark:hidden">
                <FontAwesomeIcon icon={faMoon} size="lg" />
            </button>
            <button id="toggleDark" onClick={toggleTheme} className="pl-10 hidden dark:block">
                <FontAwesomeIcon icon={faSun} size="lg" style={{color: "#ffffff",}} />
            </button>
            {/* <div>
                <img className="hidden max-lg:block"
                    src={hamburger}
                    alt="Hamburger"
                    width={25}
                    height={25}
                />
            </div> */}
        </nav>
    </header>
  )
}

export default Nav