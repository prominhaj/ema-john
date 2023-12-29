import React from 'react';
import { Link } from 'react-router-dom';
import GoogleImg from '../../assets/images/google.svg';

const Login = () => {
    return (
        <div className='container mx-auto flex my-[5%] justify-center items-center px-8 md:px-0'>
            <form className="lg:w-1/3 relative">
                <div className='w-full h-[625px] -z-10 absolute bg-orange-200 right-3 top-2 rounded-lg'></div>
                <div className="bg-white z-10 rounded-lg border border-gray-400 p-[43px]" >
                    <h2 className="text-slate-700 text-center text-[35px] font-normal font-['Lato'] tracking-tight mb-[29px]">Login</h2>
                    <label htmlFor='email' className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Email</label>
                    <input name='email' id='email' type='email' className="w-full text-xl py-2 px-3 mt-[9px] rounded-[5px] border border-gray-400 mb-[20px]" required />
                    <label htmlFor='password' className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Password</label>
                    <input name='password' id='password' type='password' className="w-full text-xl py-2 px-3 mt-[9px] rounded-[5px] border border-gray-400" required />

                    <button className="w-full h-[55px] bg-amber-500 bg-opacity-30 rounded-[5px] text-neutral-900 text-[21px] font-normal font-['Lato'] tracking-tight mt-[44px] mb-[9px]">Login</button>
                    <div className="text-slate-700 text-center text-[15px] font-normal font-['Lato'] tracking-tight">
                    New to Ema-john? <Link className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight" to="/register">Create New Account</Link>

                    </div>
                    <div className='flex items-center justify-around py-[30px]'>
                        <div className="w-[145px] h-[0px] border border-gray-400"></div>
                        <div className="text-gray-400 text-[17px] font-normal font-['Lato'] tracking-tight">or</div>
                        <div className="w-[145px] h-[0px] border border-gray-400"></div>
                    </div>

                    <button className="w-full h-[55px] rounded-[5px] border border-gray-400 flex items-center justify-center gap-3" >
                        <img src={GoogleImg} alt="" />
                        <div className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Continue with Google</div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;