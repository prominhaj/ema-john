import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import GoogleImg from '../../assets/images/google.svg';
import toast from 'react-hot-toast';
import { userContext } from '../../Auth_Context/AuthContext';

const Register = () => {
    // Context
    const {authSingUp, authGoogleHandle, authEmailVerification, loading} = useContext(userContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    // Toast
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    // Location
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    if(loading){
        return <button type="button" className="bg-indigo-500 flex text-white px-4 items-center py-1 rounded-md mx-auto my-6" disabled>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      </button>
    }

    // Handle Sing Up
    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        // Password Check
        if(password.length < 6){
           return error('Password Min 6 Character')
        }
        else if(password !== confirm){
          return error('Password No Mass')
        }

        // Email And Password Auth
        authSingUp(email, password)
        .then(result => {
            success('Register SuccessFull')
            form.reset();
            navigate(from, {replace : true})
        })
        .catch(errors => {
            error(errors.message.substr(10))
        })

        authEmailVerification()
        .then(() => {
            success('Email Verification Sent !')
        })
        .catch(errors => {
            error(errors.message)
        })
    }

    // Google Auth Handle
    const googleHandle = () => {
        authGoogleHandle()
        .then(() => {
            success('Register SuccessFull')
            navigate(from, {replace : true})
        })
        .catch(errors => {
            error(errors.message.substr(10))
        })
    }

    return (
        <div className='container mx-auto flex my-[5%] justify-center items-center px-8 md:px-0'>
            <div  className="lg:w-1/3 relative">
                <div className='w-full h-[725px] -z-10 absolute bg-orange-200 right-3 top-2 rounded-lg'></div>
                <div className="bg-white z-10 rounded-lg border border-gray-400 p-[43px]" >
                    <form onSubmit={handleSingUp}>
                        <h2 className="text-slate-700 text-center text-[35px] font-normal font-['Lato'] tracking-tight mb-[29px]">Sign Up</h2>
                        <label htmlFor='email' className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Email</label>
                        <input name='email' id='email' type='email' className="w-full text-xl py-2 px-3 mt-[9px] rounded-[5px] border border-gray-400 mb-[20px]" required />
                        <label htmlFor='password' className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Password</label>
                        <input name='password' id='password' type={show ? 'text' : 'password'} className="w-full text-xl py-2 px-3 mt-[9px] rounded-[5px] border border-gray-400 mb-[20px]" required/>
                        <label htmlFor='confirm' className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Confirm Password</label>
                        <input name='confirm' id='confirm' type={show ? 'text' : 'password'}  className="w-full text-xl py-2 px-3 mt-[9px] rounded-[5px] border border-gray-400" required/>
                        <p onClick={() => setShow(!show)} className='mt-2'><small>
                            {
                                show ? <span>Hide Password</span> : 
                                <span>Show Password</span>
                            }
                            </small></p>
                        <button type='submit' className="w-full h-[55px] bg-amber-500 bg-opacity-30 rounded-[5px] text-neutral-900 text-[21px] font-normal font-['Lato'] tracking-tight mt-[44px] mb-[9px]">Sign Up</button>
                    </form>
                    <div className="text-slate-700 text-center text-[15px] font-normal font-['Lato'] tracking-tight">
                    Already have an account? <Link className="text-amber-500 text-[15px] font-normal font-['Lato'] tracking-tight" to="/login">Login</Link>

                    </div>
                    <div className='flex items-center justify-around py-[30px]'>
                        <div className="w-[145px] h-[0px] border border-gray-400"></div>
                        <div className="text-gray-400 text-[17px] font-normal font-['Lato'] tracking-tight">or</div>
                        <div className="w-[145px] h-[0px] border border-gray-400"></div>
                    </div>

                    <button onClick={googleHandle} className="w-full h-[55px] rounded-[5px] border border-gray-400 flex items-center justify-center gap-3" >
                        <img src={GoogleImg} alt="" />
                        <div className="text-slate-700 text-[17px] font-normal font-['Lato'] tracking-tight">Continue with Google</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;