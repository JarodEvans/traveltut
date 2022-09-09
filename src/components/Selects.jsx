import React from 'react';
import SelectsCard from './SelectsCard';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import keywest from '../assets/keywest.jpg';

const Selects = () => {

    return ( 
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SelectsCard bg={borabora} text={"BoraBora"}/>
            <SelectsCard bg={borabora2} text={"Maldives"}/>
            <SelectsCard bg={maldives} text={"Antigua"}/>
            <SelectsCard bg={maldives2} text={"Cozumel"}/>
            <SelectsCard bg={keywest} text={"Jamaica"}/>
            <SelectsCard bg={borabora} text={"Key West"}/>
        </div>
     );
}
 
export default Selects;