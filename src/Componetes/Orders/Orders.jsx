import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Order from '../Shop/Order';
import ReviewProduct from '../Review/ReviewProduct';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import CardImg from '../../assets/images/credit-card.svg';

const Orders = () => {
    const data = useLoaderData();
    const [product, setProduct] = useState(data);

    const delateProduct = (id) =>{
        const remeaning = product.filter(pd => pd._id !== id);
        setProduct(remeaning);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setProduct([]);
        deleteShoppingCart();
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-40 md:gap-x-10 gap-y-10 md:my-20 my-8'>
            <div className='xl:col-span-2 flex flex-col gap-[25px]'>
                {
                    product.map(product => <ReviewProduct key={product._id} product={product} delateProduct={delateProduct}></ReviewProduct>)
                }
            </div>
            <div className='w-full pb-6 bg-[#FF99004D] rounded-lg sticky top-0'>
                <Order productCart={product} clearCart={clearCart}>
                    <Link to="/checkout">
                        <button className='flex items-center gap-3 justify-center w-full h-12 bg-[#FF9900] rounded text-white mt-5'>Proceed Checkout
                            <img src={CardImg} alt="" />
                        </button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Orders;