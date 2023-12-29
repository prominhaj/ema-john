import React, { useContext } from 'react';
import { userContext } from '../Auth_Context/AuthContext';
import { Navigate } from 'react-router-dom';

const PriveteRoaute = ({ children }) => {
    const { user, loading } = useContext(userContext);

    if(loading){
        return <button type="button" className="bg-indigo-500 flex text-white px-4 items-center py-1 rounded-md mx-auto my-6" disabled>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      </button>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PriveteRoaute;