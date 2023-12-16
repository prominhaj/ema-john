import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LayOut;