import AddToCartLogo from '../../../assets/images/cart-plus.svg';

const Product = (props) => {
    const {img, name, price, seller, ratings, stock} = props.card;
    return (
        <div className="h-[509px] rounded-lg border-2 border-gray-300 relative">
            <div className='p-2 h-[286px]'>
                <img className='rounded-lg w-full h-full' src={img} alt="" />
            </div>
            <div className='px-5'>
                <h2 className="text-neutral-900 text-[21px] font-normal tracking-tight">{name.substring(0, 25)}</h2>
                <h6 className='text-neutral-900 text-[17px] font-normal tracking-tight mt-2 mb-4'>Price: ${price}</h6>
                <div className='flex flex-col gap-[4px]'>
                    <p className='text-slate-700 text-md font-normal'>Manufacturer: {seller}</p>
                    <p className='text-slate-700 text-md font-normal'>Rating: {ratings}</p>
                    <p className='text-slate-700 text-md font-normal'>Stock: {stock}</p>
                </div>
            </div>
            <button onClick={()=> props.addToCart(props.card)} className='flex items-center justify-center gap-3 w-full h-12 bg-orange-200 rounded-bl-lg rounded-br-lg border absolute bottom-0'>Add to Cart
                <img src={AddToCartLogo} alt="" />
            </button>
        </div>
    );
};

export default Product;