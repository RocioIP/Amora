import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
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
        <section
          className={`ALQUILERES ${
            Overlay.show && 'overflow-hidden'
          } flex flex-col items-center mt-20 flex-grow max-w-7xl`}
        >
          <h1 className='text-4xl text-principal-1 shadow-lg pt-10 md:pt-10 bg-principal-2-hover w-full p-10 '>
            Outono
          </h1>
          <div className='cont-alquileres pt-2 justify-center flex flex-wrap w-full gap-5'>
            {/* {Properties.length > 0 ? (
              Properties.map((property) => (
                <Property
                  key={property.idProperty}
                  property={property}
                  mountOn={'propertiesList'}
                />
              ))
            ) : (
              <div>No hay conicidencias para su búsqueda.</div>
            )} */}
          </div>
        </section>
      </main>
      <aside
        className={`ALQUILERES ${
          Overlay.show && 'overflow-hidden'
        } flex flex-col items-center mt-20 flex-grow max-w-7xl pb-28`}
      >
        {/*  <h1 className='text-2xl text-principal-gris py-2 bg-principal-1 w-screen text-center font-semibold'>
          Viviendas destacadas
        </h1> */}
        <div className='cont-alquileres pt-2 justify-center flex flex-wrap w-full gap-5'>
          {/*  {bestRatedProperties.length > 0 &&
            bestRatedProperties
              .slice(0, 3)
              .map((property) => (
                <Property
                  key={property.idProperty}
                  property={property}
                  mountOn={'bestPropertiesList'}
                />
              ))} */}
        </div>
      </aside>
    </>
  );
}
