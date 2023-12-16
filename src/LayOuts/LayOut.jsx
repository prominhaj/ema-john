import React from 'react';
import Header from '../Componetes/Header/Header';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;