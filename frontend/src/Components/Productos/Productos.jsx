import React, { useEffect, useState } from 'react';
import { FaFilter, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { get } from '../../Helpers/Api';

export default function Productos() {
  const [OverlayCarteras, setOverlayCarteras] = useState(false);
  const [OverlayLlaveros, setOverlayLlaveros] = useState(false);
  const [OverlayPasaportes, setOverlayPasaportes] = useState(false);
  const [OverlayFundas, setOverlayFundas] = useState(false);

  return (
    <section className=' w-full h-60vh sm:w-full sm:h-50vh'>
      <div className=' ml-8 pt-10 flex flex-row sm:flex sm:flex-col-4 sm:justify-between sm:gap-10 sm:ml-40 sm:row-start-1   sm:w-5/6 sm:pt-72'>
        <div className='grid grid-rows-2'>
          <button className='absolute mt-72 ml-20 text-xl w-40 h-20 text-principal-1 bg-principal-2-hover border-4 hover:bg-principal-1 hover:text-principal-2'>
            <Link className='' to='/productos/carteras'>
              Carteras
            </Link>
          </button>
          <img
            className='  w-80 h-60'
            src='../../../Images/carteras.png'
            alt='carteras'
          />
        </div>
        <div className='grid grid-rows-2'>
          <button className='absolute mt-72 ml-20 text-xl w-40 h-20 text-principal-1 bg-principal-2-hover border-4 hover:bg-principal-1 hover:text-principal-2'>
            <Link className='' to='/productos/llaveros'>
              Llaveros
            </Link>
          </button>
          <img
            className='  w-80 h-60'
            src='../../../Images/llaveros.png'
            alt='llaveros'
          />
        </div>
        <div className='grid grid-rows-2'>
          <button className='absolute mt-72 ml-20 text-xl w-40 h-20 text-principal-1 bg-principal-2-hover border-4 hover:bg-principal-1 hover:text-principal-2'>
            <Link className='' to='/productos/pasaportes'>
              Fundas para pasaporte
            </Link>
          </button>
          <img
            className='  w-80 h-60'
            src='../../../Images/Pasaportes.png'
            alt='fundas pasaporte'
          />
        </div>
        <div className='grid grid-rows-2'>
          <button className='absolute mt-72 ml-20 text-xl w-40 h-20 text-principal-1 bg-principal-2-hover border-4 hover:bg-principal-1 hover:text-principal-2'>
            <Link className='' to='/productos/fundas'>
              Fundas para gafas
            </Link>
          </button>
          <img
            className='  w-80 h-60'
            src='../../../Images/Fundas_gafas.png'
            alt='fundas'
          />
        </div>
      </div>
    </section>
  );
}
