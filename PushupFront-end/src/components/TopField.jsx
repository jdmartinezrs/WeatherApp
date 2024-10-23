import React, { useState, useEffect, useRef } from 'react';
import background from '../../public/storage/images/background.png'

const TopField = () => {
  return (
    <section
      className='bg-lilaL h-[50vh] rounded-b-[50px] '
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -113px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex justify-between'><p className='text-witheY pt-[40px] pl-[20px]'>Kharkiv, Ukraine</p>
        <img src="../../public/storage/images/search_white.png" alt="Ícono" className='mr-2 w-5 h-5 mt-[45px] mr-[30px]' />
      </div>
      <div className='flex'><p className='text-witheY text-8xl font-regular pt-[70px] pl-[20px] w-[100vh]'> 3° </p>
        <p className='text-witheY absolute pt-[135px] left-[80px] text-sm'>Feels like -2°</p>

        <div className='flex-col'>
          <img src="../../public/storage/images/Group.png" alt="Ícono" className='mr-2 w-25 h-22 mt-[20px] mr-[2px]' />
          <p className='text-witheY text-xl  pt-[4px] pr-[45px]'>Cloudy</p></div>
      </div>

      <div className="flex justify-between items-end p-[25px] pt-[45px] text-sm"><p className='text-witheY'>January 18,16:14</p>
        <div><p className='text-witheY'>Day 3°</p>
          <p className='text-witheY'>Night -1°</p>
        </div>
      </div>
    </section>
  )
}


export default TopField;