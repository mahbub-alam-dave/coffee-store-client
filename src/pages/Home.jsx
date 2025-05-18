import React, { useContext } from 'react';
import { ContextValue } from '../context/ContextValues';
import { TiEye } from "react-icons/ti";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Banner from '../components/Banner';

const Home = () => {
    const {allCoffees, setAllCoffees} = useContext(ContextValue)

    const handleDeleteCoffee = (id) => {
        fetch(`http://localhost:3000/coffees/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted coffee in db', data)
            if(data.deletedCount) {
                const remainingCoffees = allCoffees.filter(coffee => coffee._id !== id);
                setAllCoffees(remainingCoffees)
            }
        })
    }
    return (
        <div>
            <Banner />
        <div 
            style={{
            backgroundImage: "url('https://i.ibb.co/mnXHZQY/1.png')",
            
            }}>
            
            <div 
            className='flex justify-center flex-col items-center gap-3 pb-12'>
                <span>--Sip & Savor</span>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-[#331A15]'>Popular Products</h2>
                <Link to={'/add-coffee'}><button className='bg-[#E3B577] text-white border btn border-black'>Add Coffee</button></Link>
            </div>
            <div
            
             className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1320px] mx-auto'>
                {
                    allCoffees.map(coffee => {
                        return(
                            <div key={coffee._id} className='bg-[#F5F4F1] w-full flex flex-col lg:flex-row justify-around gap-4 items-center p-4'>
                                <div className='flex items-center max-w-[200px]'>
                                    <img src={coffee.photo} className='w-full h-full' alt="" />
                                </div>

                                <div className='flex flex-col gap-2 items-center lg:items-start raleway-fonts'>
                                    <h2 className='text-2xl font-light'><span className='font-semibold'>Name: </span>{coffee.name}</h2>
                                    <h2 className='text-2xl font-light'><span className='font-semibold'>Price: </span>$ {coffee.price}</h2>
                                    <h2 className='text-2xl font-light'><span className='font-semibold'>Qty: </span>{coffee.qty}</h2>
                                </div>

                                <div className='flex lg:flex-col  gap-2'>
                                    <Link to={`/coffee-details/${coffee._id}`}><button className='btn bg-gray-500 text-white'><TiEye size={22}/></button></Link>
                                    <Link to={`/edit-coffee/${coffee._id}`}><button className='btn bg-gray-800 text-white'><MdModeEditOutline size={22}/></button>
                                     </Link>
                                    <button onClick={() => handleDeleteCoffee(coffee._id)} className='btn bg-red-400 text-white'><MdDelete size={22}/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    );
};

export default Home;