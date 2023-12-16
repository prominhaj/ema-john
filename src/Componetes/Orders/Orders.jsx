import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Shop/Order';
import ReviewProduct from '../Review/ReviewProduct';

const Orders = () => {
    const data = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 gap-40 my-20'>
            <div className='col-span-2 flex flex-col gap-[25px]'>
                {
                    data.map(product => <ReviewProduct key={product.id} product={product}></ReviewProduct>)
                }
            </div>
            <div className=' bg-[#FF99004D] h-[600px] rounded-lg sticky top-0'>
                <Order productCart={data}></Order>
            </div>
        </div>
    );
};

export default Orders;