import React from 'react';
import Navabar from '../components/Navabar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-[1320px] mx-auto p-4'>
            <Navabar />
            <Outlet />
        </div>
    );
};

export default MainLayout;