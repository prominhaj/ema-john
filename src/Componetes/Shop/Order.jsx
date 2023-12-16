import DeleteImg from '../../assets/images/Vector.svg';
import ArrowImg from '../../assets/images/Arrow.svg';

const Order = ({productCart, clearCart}) => {
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;

    for(const product of productCart){
        totalPrice = totalPrice + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shippingCost + tax;

    return (
        <div className="px-6">
            <h1 className="text-center mt-6 text-gray-800 text-[25px] font-normal font-['Lato']">Order Summary</h1>
            <div className="py-10 flex flex-col gap-4">
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Selected Items: {quantity}</p>
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Total Price: ${totalPrice}</p>
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Total Shipping Charge: ${shippingCost}</p>
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Tax: ${tax.toFixed(2)}</p>
                <h4 className=" text-neutral-900 text-[21px] font-normal font-['Lato']">Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
            <button onClick={clearCart} className='flex items-center gap-3 justify-center w-full h-12 bg-red-500 rounded text-white'>
                Clear Cart 
                <img src={DeleteImg} alt="" />
            </button>
            <button className='flex items-center gap-3 justify-center w-full h-12 bg-[#FF9900] rounded text-white mt-5'>Review Order
                <img src={ArrowImg} alt="" />
            </button>
        </div>
    );
};

export default Order;