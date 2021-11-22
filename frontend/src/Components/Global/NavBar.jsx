import { React, useEffect, useState } from 'react';

import { MenuElements } from './MenuElements';
import { Link } from 'react-router-dom';
import { FaBars, FaIcons, FaShoppingBag } from 'react-icons/fa';

export default function NavBar({ token, setToken }) {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const showMenu = () => setMostrarMenu(!mostrarMenu);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const buttonStyle =
    'text-center bg-principal-1 min-w-min p-1 cursor-pointer sm:hover:text-white sm:hover:font-bold sm:duration-300';

  return (
    <nav className='navbar  flex-grow-0 bg-principal-1-hower grid grid-cols-9 gap-5 items-center font-light h-20 fixed top-0 w-full z-50 '>
      <Link
        to='/'
        className='logo w-28 p-1 sm:col-start-1 sm:col-end-2 col-start-2 justify-self-end xl:justify-self-center'
      >
        <img src='/Images/amora.png' alt='logo Amora' id='logo' />
      </Link>
      {width <= 637 && (
        <div
          onClick={() => {
            setMostrarMenu(false);
          }}
          className={`Menu toggler animate-fadeIn ${
            mostrarMenu ? 'static' : 'hidden'
          } absolute h-screen w-screen bg-gray-700 top-0 left-0 bottom-0 right-0 bg-opacity-20 duration-300 z-10 cursor-pointer`}
        ></div>
      )}
      <ul
        className={`navBar
        sm:text-lg sm:static sm:flex-row sm:justify-self-start sm:col-start-2 sm:col-end-8 sm:bg-transparent sm:p-0 sm:justify-around sm:w-full
        lg:text-xl lg:justify-self-center lg:col-start-2 lg:col-end-8 lg:justify-evenly
        xl:col-start-2 xl:col-end-10 xl:justify-self-end xl:justify-around
        ${
          mostrarMenu ? 'right-0' : '-right-full'
        } text-2xl flex flex-col p-5 items-center bg-gray-Primary duration-300 absolute top-20 z-20`}
        id='menu'
      >
        {MenuElements.map((item) => {
          return (
            <li
              key={item.id}
              className='text-principal-1 cursor-pointer hover:text-principal-2 duration-300 ease-in-out py-10 w-full sm:w-auto sm:text-2xl text-center sm:p-0'
            >
              <Link to={item.path} onClick={showMenu}>
                {item.title}
              </Link>
            </li>
          );
        })}

        <button className='text-principal-1 text-2xl'>
          <FaShoppingBag />
        </button>
      </ul>
      <div
        className='text-gray-300 block sm:hidden absolute top-6 right-4 text-3xl cursor-pointer'
        id='menu-bar'
      >
        <FaBars onClick={showMenu} />
      </div>
    </nav>
  );
}
