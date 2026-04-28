
"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGogoolefun = async () => {
        const data = await authClient.signIn.social({
            provider: "google",

        });
        console.log(data, "data");
    }
    const handleGithupfun = async () => {
        const data = await authClient.signIn.social({
            provider: "githup",

        });
        console.log(data, "data");
    }

    return (
        <div>
            <h1 className='font-bold text-lg'>Login With</h1>
            <div className='flex flex-col  gap-2 mt-3'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGogoolefun}> <FaGoogle /> Login with Google</button>
                <button className='btn' onClick={handleGithupfun}> <FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;