import React, { useContext, useEffect, useState } from 'react';
import { ContextValue } from '../context/ContextValues';
import { Link, useNavigate, useParams } from 'react-router';

const UpdateCoffee = () => {

    const {allCoffees, setAllCoffees} = useContext(ContextValue);
    const [detailedCoffee, setDetailedCoffee] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        const findDetailedCoffee = allCoffees.find(coffee => coffee._id === id)
        if(findDetailedCoffee) {
            setDetailedCoffee(findDetailedCoffee)
        }
    },[allCoffees, id])

    const handleUpdateCoffee = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const coffeeDetails = Object.fromEntries(formData.entries())
        
        // update coffee details in the server
        fetch(`https://coffee-store-server-seven-alpha.vercel.app/coffees/${detailedCoffee._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffeeDetails)
        })
        .then(res => res.json())
        .then(data => {
            navigate('/')
            if(data.modifiedCount){
                setAllCoffees(allCoffees.map(coffee => coffee._id === detailedCoffee._id ? {...coffee, ...coffeeDetails} : coffee))
            }
        })
    }
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co/fzwVNTzV/11-3.png')"
        }}>
        <div className='flex flex-col gap-5 max-w-[1320px] mx-auto py-12'>
        <Link to={'/'}><span className='text-2xl text-[#374151] font-bold'>Back to Home</span></Link>
        <div className='bg-[#F4F3F0] flex justify-center flex-col gap-8 px-12 py-12'>
            <h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Update Existing Coffee Details</h2>
            <p className='text-lg leading-[30px] text-[rgba(27,26,26,0.7)] text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1096px] mx-auto mb-4'>
                    <label htmlFor="name">Name <br />
                    <input type="text" name='name' defaultValue={detailedCoffee.name} className='input w-full mt-1' />
                    </label>
                    <label htmlFor="price">Price <br />
                    <input type="number" name='price' defaultValue={detailedCoffee.price} className='input w-full mt-1' />
                    </label>
                    <label htmlFor="supplier">Supplier <br />
                    <input type="text" name='supplier' defaultValue={detailedCoffee.supplier} className='input w-full mt-1' />
                    </label>
                    <label htmlFor="qty">Quantity <br />
                    <input type="number" name='qty' defaultValue={detailedCoffee.qty} className='input w-full mt-1' />
                    </label>
                    <label htmlFor="category">Category <br />
                    <input type="text" name='category' defaultValue={detailedCoffee.category} className='input w-full mt-1' />
                    </label>
                    <label htmlFor="details">Details <br />
                    <input type="text" name='details' defaultValue={detailedCoffee.details} className='input w-full mt-1' />
                    </label>
                </div>

                <div className='flex flex-col gap-4 max-w-[1096px] mx-auto'>
                    <label htmlFor="photo" className='mt-4'>Photo Url <br />
                    <input type="text" name='photo' defaultValue={detailedCoffee.photo} className='input w-full mt-1' />
                    </label>
                    <input type="submit" className='btn mt-4 w-full' />
                </div>

            </form>
        </div>
        </div>
    </div>
    );
};

export default UpdateCoffee;