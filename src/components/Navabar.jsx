import React from 'react';

const Navabar = () => {
    return (
        <div className='flex justify-center items-center gap-3 p-3' style={{
            backgroundImage: "url('https://i.ibb.co/1fppy5mS/Rectangle-1.png')"
        }}>
            <img className='w-22' src="https://i.ibb.co/Ld6gxrrY/logo1.png" alt="" />
            <h2 className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white'>Espresso Emporium</h2>
        </div>
    );
};

export default Navabar;