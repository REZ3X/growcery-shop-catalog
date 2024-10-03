import React from 'react';
import SeeMoreButton from './SeeMoreButton';

function Hero() {
    return (
        <div className='bg-placeholder bg-cover text-white w-auto h-[650px] pt-48'>
            <div className='tnl:max-w-[768px] container mx-auto pdl:max-w-[420px] px-6 flex flex-col justify-center'>
                <div className='tnl:max-w-[768px] left_description pdl:max-w-[420px] flex flex-col gap-3 p-6'>
                    <h1 className='tnl:max-w-[768px] pdl:max-w-[420px] dsx:w-96 text-center p-3 text-4xl font-climate_crisis text-[#46500b] bg-[#f6f36c]'>Lorem Lorem Lorem Lorem</h1>
                    <SeeMoreButton />
                    <br /><br /><br /><br /><br /><br /><br />
                    <div id='description'></div>
                </div>
            </div>
        </div>
    )
}


export default Hero;