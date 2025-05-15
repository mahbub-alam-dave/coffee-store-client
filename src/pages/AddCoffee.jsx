import React from 'react';

const AddCoffee = () => {
    return (
        <div className='bg-[#F4F3F0] flex justify-center flex-col gap-8 px-12 py-12'>
            <h2 className='text-center text-2xl font-bold'>Add New Coffee</h2>
            <form>
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
    );
};

export default AddCoffee;