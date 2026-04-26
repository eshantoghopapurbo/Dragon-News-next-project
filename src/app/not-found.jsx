import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className=' h-[80vh] flex justify-center items-center flex-col gap-5'>
                <h2 className='text-5xl text-purple-500 font-bold'>This page is a not found</h2>
                 <Link href={"/"}>
             <button className='btn btn-primary'>Back too Home</button>
            </Link>
            </div>
           
        </div>
    );
};

export default NotFoundPage;