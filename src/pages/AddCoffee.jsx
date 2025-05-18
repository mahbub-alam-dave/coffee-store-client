import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { ContextValue } from '../context/ContextValues';

const AddCoffee = () => {

    const {allCoffees, setAllCoffees} =useContext(ContextValue)

    const navigate = useNavigate()

    const handleAddCoffee = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const coffeeData = Object.fromEntries(formData.entries())
        console.log(coffeeData)

        // add coffee to database
        fetch("http://localhost:3000/coffees", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('coffee after added to server', data)
            if(data.insertedId) {
                coffeeData._id = data.insertedId;
                setAllCoffees([...allCoffees, coffeeData])
                navigate('/')
            }
        })

    }
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co/fzwVNTzV/11-3.png')"
        }}>
            <div className='flex flex-col gap-6 max-w-[1320px] mx-auto py-12'>
            <Link to={'/'}><span className='text-2xl text-[#374151] font-bold'>Back to Home</span></Link>
            <div className='bg-[#F4F3F0] flex justify-center flex-col gap-8 px-12 py-12'>
            <h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Add New Coffee</h2>
            <p className='text-lg leading-[30px] text-[rgba(27,26,26,0.7)] text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1096px] mx-auto mb-4'>
                    <label htmlFor="name">Name <br />
                    <input type="text" name='name' placeholder='Enter coffee name' className='input w-full mt-1' />
                    </label>
                    <label htmlFor="price">Price <br />
                    <input type="number" name='price' placeholder='Enter coffee price' className='input w-full mt-1' />
                    </label>
                    <label htmlFor="supplier">Supplier <br />
                    <input type="text" name='supplier' placeholder='Enter supplier' className='input w-full mt-1' />
                    </label>
                    <label htmlFor="qty">Quantity <br />
                    <input type="number" name='qty' placeholder='Enter quantity' className='input w-full mt-1' />
                    </label>
                    <label htmlFor="category">Category <br />
                    <input type="text" name='category' placeholder='Enter category' className='input w-full mt-1' />
                    </label>
                    <label htmlFor="details">Details <br />
                    <input type="text" name='details' placeholder='Enter details' className='input w-full mt-1' />
                    </label>
                </div>

                <div className='flex flex-col gap-4 max-w-[1096px] mx-auto'>
                    <label htmlFor="photo" className='mt-4'>Photo Url <br />
                    <input type="text" name='photo' placeholder='Enter photo url' className='input w-full mt-1' />
                    </label>
                    <input type="submit" className='btn mt-4 w-full' />
                </div>

            </form>
        </div>
        </div>
        </div>
    );
};

export default AddCoffee;




/* 
https://i.ibb.co/DHF6X6zk/1.png
https://i.ibb.co/67G3KBD9/2.png
https://i.ibb.co/wNrRrTZs/3.png
https://i.ibb.co/B2DqQ8hk/4.png
https://i.ibb.co/4ZpRfRRy/5.png
https://i.ibb.co/1fCcT6DL/6.png */