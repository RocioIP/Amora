import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

export default function Llaveros(props) {
  return (
    <>
      <main className='flex flex-col sm:flex-row sm:gap-2'>
        <section className='flex flex-col mt-20 flex-grow '>
          <h1 className='text-4xl mt-5 text-principal-1 shadow-lg  md:pt-5 bg-principal-2-hover w-full p-7 '>
            Llaveros
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
          </div>
        </section>
      </main>
    </>
  );
}
