import React from 'react';
import SeeMoreButton from './SeeMoreButton';

function Hero() {
    return (
        <div className='bg-placeholder bg-cover text-white w-auto h-[650px] pt-48'>
            <div className='container mx-auto ttl:w-[375px] tdn:w-[320px] px-6 flex flex-col justify-center'>
                <div className='left_description w-96 ttl:w-80 tdn:w-64 flex flex-col gap-3 p-6'>
                    <h1 className='w-96 pdl:w-80 ttl:w-72 tdn:w-56 text-center p-3 text-4xl font-climate_crisis text-[#46500b] bg-[#f6f36c]'>Lorem Lorem Lorem Lorem</h1>
                    <SeeMoreButton />
                    <br /><br /><br /><br /><br /><br /><br />
                    <div id='description'></div>
                </div>
            </div>
        </div>
    )
}


export default Hero;