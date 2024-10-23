import React, {useState, useEffect, useRef} from 'react';
import TopField from '../components/TopField'
import Buttons from '../components/Buttons'
import WeatherCharact from '../components/WeatherCharact'
import { useNavigate } from 'react-router-dom';


const IndexPage = ()=>{

    return(
        <>
         <TopField/>
         <Buttons/>
        <WeatherCharact/>
        </>

    )

}

export default IndexPage;
