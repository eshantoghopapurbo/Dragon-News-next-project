
import Navbar from '@/components/shared/Navbar';
import { Montserrat } from 'next/font/google';

import React from 'react';
import { montserrat } from '../layout';

const AuthLayoutPage = ({children}) => {
    return (
        <div  className={`${montserrat.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayoutPage;