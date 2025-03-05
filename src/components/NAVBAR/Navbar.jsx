import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import toast from 'react-hot-toast';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credits, setCredits] = useState(0);
  const navigate = useNavigate();

  // Load credits and authentication status from localStorage
  useEffect(() => {
    const savedCredits = parseInt(localStorage.getItem('credits')) || 0;
    setCredits(savedCredits);
    setIsAuthenticated(!!localStorage.getItem('auth'));
  }, []);

  // Save credits to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('credits', credits);
  }, [credits]);

  const toggleNav = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    toast.error('Logged out');
  };

  return (
    <>
      <nav className="w-full flex bg-gray-300 flex-wrap justify-between items-center p-7 top-0">
        <Link to="/">
          <div className="flex">
            <MdSms className="text-slate-800 text-3xl" />
            <h2 className="text-slate-900 hidden sm:block font-bold ml-2 text-xl tracking-wider">Merchant SMS & Payments</h2>
          </div>
        </Link>

        <button onClick={toggleNav} className="text-slate-800 md:hidden block focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}>
          <ul className="text-slate-800 font-semibold md:flex flex-col space-y-5 md:space-y-0 md:flex-row gap-5 text-[18px] w-full md:w-auto">
            {/* <li className='mt-10 md:mt-0'>
              <NavLink to="/" className={({ isActive }) => `${isActive ? 'underline text-slate-800' : 'text-slate-700'} hover:underline hover:border-white cursor-pointer `}>
                <FaBell className='h-6 w-6 mt-1 mr-5'/>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/" className="hover:underline hover:border-white cursor-pointer mt-1 mr-10">
                Settings
              </NavLink>
            </li> */}

            <li className="flex items-center">
              <button 
                onClick={() => setCredits(credits + 1)} 
                className="bg-slate-800 pl-4 pr-4 border-2 border-white rounded-lg hover:bg-slate-700 text-white">
                <span onClick={(e) => { e.stopPropagation(); setCredits(credits - 1); }} className="text-white-400 mr-3 font-bold">-</span>
                Credits: {credits}
                <span className="text-white-400 font-bold ml-3">+</span>
              </button>
            </li>

            <li>
              {isAuthenticated ? (
                <button onClick={handleLogout} className="bg-slate-800 p-2 pl-4 pr-4 border-2 border-white rounded-lg hover:bg-slate-700 text-white">
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="bg-slate-800 p-2 pl-4 pr-4 border-2 border-white rounded-lg hover:bg-slate-700 text-white">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <hr className='font-bold' />
    </>
  );
}

export default Navbar;
