import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherCharact = ()=>{
    return(

<div class="grid grid-cols-2 gap-y-2 gap-x-1 justify-center">
    
    <div class=" flex bg-lilaL w-[45vw] h-[90px] rounded-[20px] mx-auto">
    <div class="flex">
    <div class="flex items-center justify-center h-[90px]">
    <img src='../../public/storage/images/air.png' alt='Ícono' className='w-8 h-8 '/>
</div>
</div>


    <div className='mr-2.5 '> <p>Wind Speed</p>
    <p>12km/h</p> </div>
    </div>




    <div class="bg-lilaL w-[45vw] h-[90px] rounded-[20px] mx-auto">Div 2</div>
    <div class="bg-lilaL w-[45vw] h-[90px] rounded-[20px] mx-auto">Div 3</div>
    <div class="bg-lilaL w-[45vw] h-[90px] rounded-[20px] mx-auto">Div 4</div>
</div>





    )
}
export default WeatherCharact