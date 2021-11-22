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
  const [OverlayProducts, setOverlayProducts] = useState(false);

  return (
    <section className='bg-principal-2-hover w-full h-60vh sm:w-full sm:h-50vh'>
      <div className=' ml-8 pt-10 flex flex-row sm:flex sm:flex-col-4 sm:justify-between sm:gap-10 sm:ml-40 sm:row-start-1  sm:col-start-1  sm:w-5/6 sm:h-80'>
        <div
          onMouseOver={(e) => {
            setOverlayProducts(true);
          }}
          onMouseLeave={(e) => {
            setOverlayProducts(false);
          }}
        >
          {OverlayProducts && (
            <div className='animate-fadeIn overlay z-20 absolute  flex flex-col gap-2 items-center justify-center m-auto top-0 bottom-0 left-0 right-0 text-xl font-medium text-white'>
              <span className='filter drop-shadow-2xl'>
                <Link className='' to='/carteras'>
                  Carteras
                </Link>
              </span>
            </div>
          )}
          <img
            className='animate-TopY w-80 h-60'
            src='../../../Images/carteras.png'
            alt='cartera'
          />
        </div>
        <button>
          <img
            className='animate-TopY w-80 h-60'
            src='../../../Images/llaveros.png'
            alt='llaveros'
          />
          <Link className='' to='/productos/llaveros'></Link>
        </button>
        <img
          className='animate-TopY w-96 h-60'
          src='../../../Images/Pasaportes.png'
          alt='funda'
        />
        {/*  <Link className='' to='/productos/fundas'>
      </Link>
 */}
        <img
          className='animate-TopY w-72 h-56'
          src='../../../Images/Fundas_gafas.png'
          alt='pasaporte'
        />
        {/* <Link className={`${buttonStyle} `} to='/productos/pasaportes'>
        Fundas Pasaporte
      </Link> */}
      </div>
    </section>
  );
}
