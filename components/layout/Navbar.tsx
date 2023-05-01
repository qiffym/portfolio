'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [theme, setTheme] = useState('corporate');

  const toggleTheme = () => {
    if (theme === 'corporate') {
      setTheme('business');
    } else {
      setTheme('corporate');
    }
  };

  useEffect(() => {
    let dataTheme = document.querySelector('html');
    dataTheme?.setAttribute('data-theme', theme);
  }, [theme]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="container">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center justify-center space-x-5 px-4">
          <Link
            href={'/'}
            onClick={scrollToTop}
            className="block py-6 text-lg font-bold text-primary"
          >
            qiffym
          </Link>
          {/* Theme Toggle */}
          <div>
            <label className="swap-rotate swap">
              <input type="checkbox" onClick={toggleTheme} />
              <svg
                className="swap-on h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFCC33"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {/* end Theme Toggle */}
        </div>
        <div className="flex items-center px-4">
          <button
            onClick={() => setHamburger(!hamburger)}
            id="hamburger"
            name="hamburger"
            type="button"
            className={`absolute right-4 block ${
              hamburger && 'hamburger-active'
            } lg:hidden`}
          >
            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>

          <nav
            className={`${
              !hamburger && 'hidden'
            } rounded-box absolute right-4 top-full w-full max-w-[250px] shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none`}
          >
            <ul className="menu rounded-box menu-vertical bg-base-100 lg:menu-horizontal lg:bg-transparent">
              <li className="hover-bordered">
                <Link href={'#beranda'} onClick={scrollToTop}>
                  Beranda
                </Link>
              </li>
              <li className="hover-bordered">
                <a href={'#about'}>Tentang Saya</a>
              </li>
              <li className="hover-bordered">
                <a href={'#portfolio'}>Portfolio</a>
              </li>
              <li className="hover-bordered">
                <a href={'#TaTs'}>Tech and Tools</a>
              </li>
              {/* <li className="hover-bordered">
                <a href={'#!'}>Blog</a>
              </li> */}
              {/* <li className="hover-bordered">
                <a href={'#contact'}>Kontak</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
