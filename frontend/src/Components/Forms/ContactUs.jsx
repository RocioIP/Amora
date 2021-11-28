import React from 'react';
import { Controller, useForm } from 'react-hook-form';
/* import { CreateFormData, post } from '../../Helpers/Api'; */
import Email from './Inputs/Email';

export default function ContactUs() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();

  /*  function onSubmit(body, e) {
    e.preventDefault();
    post(
      'http://localhost:4000/contact',
      CreateFormData(body),
      (data) => {
        console.log(data);
        alert(data.message);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  } */

  // Styles
  const inpStyle =
    'px-3 py-3 w-full placeholder-gray-400 text-gray-600 relative bg-white text-sm border border-gray-400 outline-none focus:outline-none focus:ring';

  return (
    <section className='pt-20 sm:pb-40 flex flex-col items-center bg-white'>
      <h1 className='sm:text-4xl text-3xl p-4 w-full text-principal-1  bg-principal-2-hover  sm:p-4'>
        Amora
      </h1>
      <div className='flex w-10/12 text-principal-gris pb-36 flex-col md:flex-row-reverse gap-5 sm:pb-2'>
        <div className=' w-full gap-y-3 pt-4'>
          <h1 className='w-full self-center font-medium text-3xl border-b-4 border-gray-300 text-principal-1'>
            Cúentanos
          </h1>
          <p className='pt-4 text-xl max-w-full text-justify'>
            En Amora estamos encantados de que te pongas en contacto para
            sugerirnos lo que se te ocurra.
            <br /> Intentaremos responderte en la mayor brevedad posible.
          </p>
        </div>
        <form
          className='font-medium flex flex-col w-full pt-2 sm:pt-5 m-auto max-w-xl'
          onSubmit={handleSubmit()}
        >
          <label className=''>
            <div className='select-none'> Nombre Completo*</div>
            <input className={inpStyle} type='text' />
          </label>
          <label>
            <div className='select-none'> Correo electrónico*</div>
            <input className={inpStyle} type='text' />
          </label>
          <label>
            <div>Asunto</div>
            <input
              className={inpStyle}
              type='text'
              {...register('asunto', { required: 'Debes escribir un asunto.' })}
            />
          </label>
          {errors.asunto && (
            <p className='text-red-500'>{errors.asunto.message}</p>
          )}
          <label>
            <div className='select-none'>Comentarios</div>
            <textarea
              className={`${inpStyle} w-full h-60 resize-none`}
              name='comments'
              id='comments'
              cols='30'
              rows='10'
              {...register('comentarios', {
                required: 'Debes añadir algún comentario.',
                maxLength: {
                  value: 250,
                  message: 'No puedes escribir más de 250 carácteres.',
                },
              })}
            ></textarea>
          </label>
          {errors.comentarios && (
            <p className='text-red-500'>{errors.comentarios.message}</p>
          )}
          <input
            className='button select-none w-1/2 self-center text-center text-xl p-2 text-principal-1 bg-principal-2-hover border-4 hover:bg-principal-1 hover:text-principal-2 transform ease-in duration-200 cursor-pointer'
            type='submit'
            value='Contactar'
          />
        </form>
      </div>
    </section>
  );
}
