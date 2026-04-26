import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h1 className='font-bold text-lg'>Login With</h1>
            <div className='flex flex-col  gap-2 mt-3'>
                <button className='btn border-blue-500 text-blue-500'> <FaGoogle/> Login with Google</button>
            <button className='btn'> <FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;