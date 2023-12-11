import DeleteImg from '../../assets/images/Vector.svg';
import ArrowImg from '../../assets/images/Arrow.svg';

const Order = () => {
    return (
        <div className="px-6">
            <h1 className="text-center mt-6 text-gray-800 text-[25px] font-normal font-['Lato']">Order Summary</h1>
            <div className="py-10 flex flex-col gap-4">
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Selected Items: 6</p>
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Total Price: $1140</p>
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Total Shipping Charge: $5</p>
                <p className=" text-slate-700 text-[17px] font-normal font-['Lato']">Tax: $114</p>
                <h4 className=" text-neutral-900 text-[21px] font-normal font-['Lato']">Grand Total: $1559</h4>
            </div>
            <button className='flex items-center gap-3 justify-center w-full h-12 bg-red-500 rounded text-white'>
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