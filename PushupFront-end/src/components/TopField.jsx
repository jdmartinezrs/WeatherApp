import React, {useState, useEffect, useRef} from 'react';
import background from '../../public/storage/images/background.png'

const TopField = () =>{
    return(
      <section 
      className='bg-lilaL h-[45vh] rounded-b-[50px]' 
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center -135px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p>Kharkiv, Ukraine</p>
    </section>

    )
}


export default TopField;