import React, { useEffect, useState } from 'react';
import { FaFilter, FaShoppingBag } from 'react-icons/fa';
import { get } from '../../Helpers/Api';

export default function Productos(props) {
  const [Overlay, setOverlay] = useState({ show: false });

  const [bestRatedProperties, setBestRatedProperties] = useState([]);

  /*   useEffect(() => {
    get(
      `http://localhost:4000/properties?orden=valoraciones&direccion=DESC`,
      (data) => {
        if (data.message !== 'No hay conicidencias para su busqueda') {
          setBestRatedProperties(data.properties);
        } else {
          setBestRatedProperties([]);
        }
      },
      (error) => console.log(error),
      null
    );
  }, []); */

  return (
    <>
      <main className='flex flex-col sm:flex-row sm:gap-2'>
        <section className='flex flex-col mt-20 flex-grow '>
          <h1 className='text-4xl mt-5 text-principal-1 shadow-lg  md:pt-5 bg-principal-2-hover w-full p-7 '>
            Carteras
          </h1>
          <div className='cont-alquileres   pt-20 w-full gap-5'>
            <section className='flex flex-col-2 justify-around'>
              <img
                src='../../../Images/cartera_pequeña.png'
                alt='cartera'
                className='w-80 ml-10 '
              />
              <div className='border-4 w-1/3'>
                <h1 className='bg-principal-2-hover text-2xl p-2 text-principal-1 font-semibold'>
                  Cartera Bolboreta
                </h1>
                <p className='p-5 text-xl'>
                  Cartera de bolsillo con espacio para billetes, con 3 zonas
                  para tarjetas y monedero. <br />
                  Cosido y pintado a mano.
                </p>

                <button className=' flex flex-col-2 justify-between border-2 p-2 bg-principal-2-hover w-32'>
                  Añádelo
                  <FaShoppingBag className='text-principal-1 text-2xl' />
                </button>
              </div>
            </section>
            {/* <article className=' border-t-4 border-r-4 border-l-4 shadow-custom'>
              <img
                className='w-72'
                src='../../../Images/cartera_mariposa.jpg'
                alt='cartera pequeña'
              />
              <div className='flex flex-col-2 justify-between pl-2 pr-2 bg-principal-2-hover'>
                <h1 className='text-2xl  text-principal-1 '>Cartera 1</h1>
                <p className='text-2xl  bg-principal-2-hover '>
                  <span className=' pt-3 pl-2 text-gray-700'>35 €</span>
                </p>
              </div>
              <div className='flex flex-col-2 justify-between'>
                <p className='h-20 text-lg text-gray-700'>Estilo y comodidad</p>
                <button className='text-principal-1 text-3xl pt-24 pr-3 '>
                  <FaShoppingBag />
                </button>
              </div>
            </article>
            <article className=' border-t-4 border-r-4 border-l-4 shadow-custom'>
              <img
                className='w-72'
                src='../../../Images/cartera_mariposa.jpg'
                alt='cartera pequeña'
              />
              <h1 className='text-2xl  text-principal-1 bg-principal-2-hover'>
                Cartera 1
              </h1>
              <div className='flex flex-col-2 justify-between'>
                <p className='h-20 text-lg text-gray-700'>Estilo y comodidad</p>
                <p className='text-2xl mt-20 mr-2 mb-2 rounded-full bg-principal-2-hover w-14 h-14 relative'>
                  <span className='absolute pt-3 pl-2 text-gray-700'>35 €</span>
                </p>
              </div>
            </article>
            <article className=' border-t-4 border-r-4 border-l-4 shadow-custom'>
              <img
                className='w-72'
                src='../../../Images/cartera_mariposa.jpg'
                alt='cartera pequeña'
              />
              <h1 className='text-2xl  text-principal-1 bg-principal-2-hover'>
                Cartera 1
              </h1>
              <div className='flex flex-col-2 justify-between'>
                <p className='h-20 text-lg text-gray-700'>Estilo y comodidad</p>
                <p className='text-2xl mt-20 mr-2 mb-2 rounded-full bg-principal-2-hover w-14 h-14 relative'>
                  <span className='absolute pt-3 pl-2 text-gray-700'>35 €</span>
                </p>
              </div>
            </article> */}
          </div>
        </section>
      </main>
    </>
  );
}
