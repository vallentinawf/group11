import * as React from 'react';
import heroImg from '../../assets/heroImg.jpg';

export default function Hero(){
    return(
        <div className='w-full h-screen mb-20'>
            <div className='w-full h-[740px] absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={heroImg} alt="/"></img>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 pt-32'>
                <div className='bg-gray/100 rounded-md shadow-xl'>
                    <div className='pb-11'>
                        <div>
                            <h1 className='font-black text-6xl text-orange relative pl-6 pt-8 drop-shadow-lg shadow-black font-primary'>Find, book, and</h1>
                            <h1 className='font-black text-6xl text-orange relative pl-6 pt-3 drop-shadow-lg shadow-black font-primary'>rent motorcycle</h1>
                            <h1 className='font-black text-6xl text-orange relative pl-6 pt-3 drop-shadow-lg shadow-black font-primary'>easily.</h1>
                            <p className='font-normal text-xl text-orange relative pl-7 pt-3'>Get a motorcycle wherever and whenever you need it.</p>
                        </div>
                        <div className='pl-7 pt-14'>
                            <button className='w-44 py-2 bg-orange relative text-black font-bold rounded-md shadow-md shadow-black/25 hover:shadow-orange/10'>Book now</button> 
                            <button className='pl-40 text-orange relative font-bold underline'>see all motorcycles</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}