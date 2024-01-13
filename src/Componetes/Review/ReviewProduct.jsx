import React from 'react';
import TrashAlt from '../../assets/images/trash-alt.svg';

const ReviewProduct = ({product, delateProduct}) => {
    const {img, name, price, quantity, _id} = product;
    return (
        <div className=' p-[8px] rounded-lg border border-gray-400 flex items-start gap-5'>
            <div className='h-[120px]'>
                <img className='h-full rounded-md' src={img} alt="" />
            </div>
            <div className='flex items-center justify-between w-full mr-6'>
                <div className='flex flex-col gap-[10px] '>
                    <h2 className='text-gray-800 text-[21px] font-normal font-[Lato] tracking-tight'>{name}</h2>
                    <p className='text-gray-800 text-[15px] font-normal font-[Lato] tracking-tight'>Price: <span className='text-amber-500'>${price}</span></p>
                    <p className='text-gray-800 text-[15px] font-normal font-[Lato] tracking-tight'>Quantity: <span className='text-amber-500'>{quantity}</span></p>
                </div>
                <button onClick={() => delateProduct(_id)} className='w-[55px] h-[55px] bg-rose-500 bg-opacity-30 rounded-full flex justify-center items-center'><img src={TrashAlt} alt="" /></button>
            </div>
        </div>
    );
};

export default ReviewProduct;