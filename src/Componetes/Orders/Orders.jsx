import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Shop/Order';
import ReviewProduct from '../Review/ReviewProduct';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const data = useLoaderData();
    const [product, setProduct] = useState(data);

    const delateProduct = (id) =>{
        const remeaning = product.filter(pd => pd.id !== id);
        setProduct(remeaning);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setProduct([]);
        deleteShoppingCart();
    }

    return (
        <div className='grid md:grid-cols-3 gap-40 my-20'>
            <div className='col-span-2 flex flex-col gap-[25px]'>
                {
                    product.map(product => <ReviewProduct key={product.id} product={product} delateProduct={delateProduct}></ReviewProduct>)
                }
            </div>
            <div className=' bg-[#FF99004D] h-[600px] rounded-lg sticky top-0'>
                <Order productCart={product} clearCart={clearCart}></Order>
            </div>
        </div>
    );
};

export default Orders;