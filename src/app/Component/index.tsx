// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/">
            <a>MyApp</a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
