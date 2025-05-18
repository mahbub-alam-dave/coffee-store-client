import React, { useContext, useEffect, useState } from 'react';
import { ContextValue } from '../context/ContextValues';
import { Link, useParams } from 'react-router';

const Details = () => {
    const {allCoffees} = useContext(ContextValue);
    const [detailedCoffee, setDetailedCoffee] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const findDetailedCoffee = allCoffees.find(coffee => coffee._id === id)
        console.log(findDetailedCoffee)
        if(findDetailedCoffee) {
            setDetailedCoffee(findDetailedCoffee)
        }
    },[allCoffees, id])
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co/fzwVNTzV/11-3.png')"
        }}>
        <div className='flex flex-col gap-6 max-w-[1320px] mx-auto py-12'>
        <Link to={'/'}><span className='text-2xl text-[#374151] font-bold'>Back to Home</span></Link>
        <div className='flex justify-center items-center py-12 bg-[#F5F4F1] '>
            <div>
                <img src={detailedCoffee.photo} alt="" />
                <div>
                    <h2 className='text-2xl font-thin'><span className='font-bold'>Name: </span>{detailedCoffee.name}</h2>
                    <p className='text-lg sm:text-xl'><span className='font-bold'>Price: </span> $ {detailedCoffee.price}</p>
                    <p className='text-lg sm:text-xl'><span className='font-bold'>Quantity: </span> {detailedCoffee.qty}</p>
                    <p className='text-lg sm:text-xl'><span className='font-bold'>Category: </span> {detailedCoffee.category}</p>
                    <p className='text-lg sm:text-xl'><span className='font-bold'>Details: </span> {detailedCoffee.details}</p>

                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Details;