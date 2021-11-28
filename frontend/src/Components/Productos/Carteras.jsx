import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel';

export default function Carteras(props) {
  return (
    <>
      <main className='flex flex-col sm:flex-row sm:gap-2'>
        <section className='flex flex-col mt-20 flex-grow '>
          <h1 className='text-4xl mt-5 text-principal-1 shadow-lg  md:pt-5 bg-principal-2-hover w-full p-7 '>
            Carteras
          </h1>
          <div className=' pt-40 w-full gap-5'>
            <section className='flex flex-col-2 justify-around'>
              <img
                src='../../../Images/cartera_pequeña.png'
                alt='cartera'
                className='w-80 ml-10 '
              />
              <div className='border-4 w-1/3'>
                <div className='bg-principal-2-hover text-2xl p-2 text-principal-1 font-semibold flex flex-col-2 justify-between'>
                  <h1>Cartera Bolboreta</h1>
                  <h2>35 €</h2>
                </div>
                <p className='p-5 text-xl h-32 w-full'>
                  Cartera de bolsillo con espacio para billetes, con 3 zonas
                  para tarjetas y monedero. <br />
                  Cosido y pintado a mano.
                  <br /> Piel de potro y cerdo planchado.
                </p>

                <button className='flex flex-col-2 justify-around border-4 p-3  w-1/6  text-principal-1 bg-principal-2-hover  hover:bg-principal-1 hover:text-principal-2 transform ease-in duration-200 cursor-pointer absolute ml-80 mt-32'>
                  COMPRAR
                  <FaShoppingBag className=' text-2xl ' />
                </button>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
