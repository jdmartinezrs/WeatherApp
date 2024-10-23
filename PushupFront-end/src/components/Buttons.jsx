import React, { useState, useEffect } from 'react';

const Buttons=()=> {
    return(
        <section className='flex justify-center space-x-4 p-4'>
        <button className='bg-withe w-32 px-4 py-4 rounded-lg hover:bg-lilaL'>
            Today
        </button>
        <button className='bg-withe w-32 px-4 py-4 rounded-lg hover:bg-lilaL'>
            Tomorrow
        </button>
        <button className='bg-withe w-32 px-4 py-4 rounded-lg hover:bg-lilaL'>
            10 days
        </button>
    </section>
    
    )
}
export default Buttons