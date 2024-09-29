import React from 'react';
import SeeMoreButton from './SeeMoreButton';

function Hero() {
    return (
        <div className='bg-placeholder bg-cover text-white w-auto h-[650px] pt-48'>
            <div className='container mx-auto px-6 flex flex-col justify-center'>
                <div className='left_description w-96 flex flex-col gap-3 p-6'>
                    <h1 className='text-4xl font-bold'>Lorem</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam excepturi quos ut nemo magnam consequuntur et alias similique omnis delectus quis, ducimus reprehenderit nulla facere incidunt. Nulla, fugit quasi!
                    </p>
                    <SeeMoreButton />
                    <br /><br /><br /><br />
                    <div id='description'></div>
                </div>
            </div>
        </div>
    )
}


export default Hero;