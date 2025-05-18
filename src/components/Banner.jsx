import React from 'react';

const Banner = () => {
    return (
        <div className='mb-12 sm:mb-16'>
        <div style={{
            backgroundImage: "url('https://i.ibb.co/9kMfk4zg/3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        className=' px-12 py-12 sm:p-18 md:p-36 lg:py-44 flex flex-col gap-4 items-end'>
            <div className='flex flex-col gap-4 items-start'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-white'>Would you like a Cup of Delicious Coffee?</h2> 
           <p className='raleway-fonts text-base text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
           <button className='btn raleway-fonts text-lg sm:text-lg md:text-2xl text-[#242222] bg-[#E3B577]'>Learn more</button>
            </div>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-5 sm:gap-6 md:gap-7 md:gap-5 bg-[#ECEAE3] p-4 sm:p-6 md:p-8'>
        <div className='flex flex-col gap-4 items-start max-w-[300px] w-full'>
            <img src="https://i.ibb.co/jkQZT68S/1.png" alt="" />
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#331A15]'>Awesome Aroma</h3>
            <p className='raleway-fonts text-base leading-[26px] text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='flex flex-col gap-4 items-start max-w-[300px] w-full'>
            <img src="https://i.ibb.co/zh44pmNG/2.png" alt="" />
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#331A15]'>High Quality</h3>
            <p className='raleway-fonts text-base leading-[26px] text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='flex flex-col gap-4 items-start max-w-[300px] w-full'>
            <img src="https://i.ibb.co/4RBKbZmN/3.png" alt="" />
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#331A15]'>Pure Grades</h3>
            <p className='raleway-fonts text-base leading-[26px] text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='flex flex-col gap-4 items-start max-w-[300px] w-full'>
            <img src="https://i.ibb.co/qYNs6q43/4.png" alt="" />
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#331A15]'>Proper Roasting</h3>
            <p className='raleway-fonts text-base leading-[26px] text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
        </div>
        </div>
    );
};

export default Banner;
/* 

 */