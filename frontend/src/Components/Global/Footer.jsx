import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MenuElements } from './MenuElements';

/* export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
} */

export default function Footer({
  token,
  setToken,
  setIsFooterVisible,
  IsFooterVisible,
}) {
  const footer = useRef();
  /* const isVisible = useOnScreen(footer); */

  /* useEffect(() => {
    setIsFooterVisible(isVisible);
  }, [isVisible, setIsFooterVisible]);
 */
  return (
    <footer
      ref={footer}
      className='text-principal-1 bottom-0 bg-principal-1-hover h-20 absolute w-full flex items-center justify-evenly md:justify-between md:text-2xl md:pl-14 md:pr-16 md:bg-principal-2-hover'
    >
      <div className='logo+name h-full flex flex-col items-center justify-center'>
        <Link to='/' className='logo p-1'>
          <img
            className='w-28'
            src='/Images/amora.png'
            alt='logo Amora'
            id='logo'
          />
        </Link>
      </div>
      <div className='links'>
        <ul className=' md:flex md:gap-5'>
          {MenuElements.map((item) => {
            if (item.id === 1) {
              return '';
            }

            return (
              <li
                key={item.id}
                className='text-principal-1 cursor-pointer hover:text-gray-500 duration-300 ease-in-out w-full sm:w-auto text-center sm:p-0'
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='redes sociales flex flex-col gap-2'>
        <h3>Síguenos en:</h3>
        <div className='flex gap-2 text-principal-1'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.instagram.com/amora_pel/'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
