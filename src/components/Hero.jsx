import React from 'react';
import SeeMoreButton from './SeeMoreButton';

function Hero() {
    return (
        <div className='bg-placeholder bg-cover text-white pt-24'>
            <div className='container mx-auto px-6'>
                <div className='left_description w-80  flex flex-col gap-2 p-4'>
                    <h1 className='text-4xl font-bold'>Lorem</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam excepturi quos ut nemo magnam consequuntur et alias similique omnis delectus quis, ducimus reprehenderit nulla facere incidunt. Nulla, fugit quasi!
                    </p>
                    <SeeMoreButton />
                </div>
            </div>
        </div>
    )
}


export default Hero;