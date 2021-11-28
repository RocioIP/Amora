import { React, useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

/* import { TokenContext } from '../../Helpers/Hooks/TokenProvider'; */

export function Home() {
  return (
    <>
      <Banner />
      <ProductoNew />
    </>
  );
}

export function Banner() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(16, 16, 16, 0.8),rgba(16, 16, 16, 0.5)),url('../../../Images/cabecera4.JPG')",
      }}
      className='header bg-center bg-cover max-w-full grid grid-cols-10 grid-rows-10  h-1/3 sm:h-50vh  sm:max-w-full sm:grid sm:grid-rows-4 gap-5'
    >
      <div className=' col-start-2 col-end-10  row-start-1 row-end-6 text-white h-30vh flex flex-col gap-2  sm:flex sm:flex-col-4 sm:col-start-1  sm:col-end-4 sm:mt-40 sm:ml-20 '>
        <img
          className='w-72 ml-28 sm:ml-60 '
          src='../../../Images/amora.png'
          alt='nombre de la marca'
        />

        <p className='w-full ml-28  text-principal-2 text-xl sm:text-2xl sm:ml-40 '>
          Artículos hechos en piel y pintados a mano.
        </p>
      </div>
    </div>
  );
}

export function ProductoNew() {
  const [OverlayCarteras, setOverlayCarteras] = useState(false);
  const [OverlayLlaveros, setOverlayLlaveros] = useState(false);
  const [OverlayPasaportes, setOverlayPasaportes] = useState(false);
  const [OverlayFundas, setOverlayFundas] = useState(false);

  return (
    <section className='bg-principal-2-hover w-full h-60vh sm:w-full sm:h-50vh'>
      <div className=' ml-8 pt-24 flex flex-row sm:flex sm:flex-col-4 sm:justify-between sm:gap-10 sm:ml-40 sm:row-start-1  sm:col-start-1  sm:w-5/6 sm:h-80'>
        <div
          onMouseOver={(e) => {
            setOverlayCarteras(true);
          }}
          onMouseLeave={(e) => {
            setOverlayCarteras(false);
          }}
        >
          {OverlayCarteras && (
            <div className='animate-fadeIn overlay flex flex-col gap-2 text-xl font-medium text-gray-700 '>
              <Link
                className='absolute mt-32 ml-24 border-4 bg-principal-1 p-2'
                to='/productos/carteras'
              >
                Carteras
              </Link>
            </div>
          )}
          <img
            className='animate-TopY w-80 h-60'
            src='../../../Images/carteras.png'
            alt='carteras'
          />
        </div>
        <div
          onMouseOver={(e) => {
            setOverlayLlaveros(true);
          }}
          onMouseLeave={(e) => {
            setOverlayLlaveros(false);
          }}
        >
          {OverlayLlaveros && (
            <div className='animate-fadeIn overlay flex flex-col gap-2 text-xl font-medium text-gray-700 '>
              <Link
                className='absolute mt-32 ml-24 border-4 bg-principal-1 p-2'
                to='/productos/llaveros'
              >
                Llaveros
              </Link>
            </div>
          )}
          <img
            className='animate-TopY w-80 h-60'
            src='../../../Images/llaveros.png'
            alt='llaveros'
          />
          <Link className='' to='/productos/llaveros'></Link>
        </div>
        <div
          onMouseOver={(e) => {
            setOverlayPasaportes(true);
          }}
          onMouseLeave={(e) => {
            setOverlayPasaportes(false);
          }}
        >
          {OverlayPasaportes && (
            <div className='animate-fadeIn overlay flex flex-col gap-2 text-xl font-medium text-gray-700 '>
              <Link
                className='absolute mt-32 ml-20 border-4 bg-principal-1 p-2'
                to='/productos/pasaportes'
              >
                Fundas pasaporte
              </Link>
            </div>
          )}
          <img
            className='animate-TopY w-96 h-60'
            src='../../../Images/Pasaportes.png'
            alt='fundas de pasaporte'
          />
        </div>

        <div
          onMouseOver={(e) => {
            setOverlayFundas(true);
          }}
          onMouseLeave={(e) => {
            setOverlayFundas(false);
          }}
        >
          {OverlayFundas && (
            <div className='animate-fadeIn overlay flex flex-col gap-2 text-xl font-medium text-gray-700 '>
              <Link
                className='absolute mt-32 ml-24 border-4 bg-principal-1 p-2'
                to='/productos/fundas'
              >
                Fundas de Gafas
              </Link>
            </div>
          )}
          <img
            className='animate-TopY w-72 h-56'
            src='../../../Images/Fundas_gafas.png'
            alt='fundas de gafas'
          />
        </div>
      </div>
    </section>
  );
}
