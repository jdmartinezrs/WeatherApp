import React, {useState, useEffect, useRef} from 'react';
import TopField from '../components/TopField'

import { useNavigate } from 'react-router-dom';


const IndexPage = ()=>{

    return(
        <>
         <TopField/>
        <h1 className='text-purple'>Let's Go!</h1>
        </>

    )

}

export default IndexPage;
