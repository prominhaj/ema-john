import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Shop/Order';

const Orders = () => {
    const data = useLoaderData();
    return (
        <div className='grid md:grid-cols-3'>
            <div className='col-span-2'>
                <h1 className='text-center my-10 font-medium text-4xl'>This is Orders Page: {data.length}</h1>
            </div>
            <div className=' bg-[#FF99004D] h-[630px] rounded-lg'>
                <Order productCart={data}></Order>
            </div>
        </div>
    );
};

export default Orders;