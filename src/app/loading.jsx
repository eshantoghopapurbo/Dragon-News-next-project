import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h[85vh] items-center justify-center'>
            Global loading
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default LoadingPage;