import React from 'react';

const Loader = () => {
    return (
        <div className='py-10 lg:py-20 flex justify-center'>
            <div className="w-16 lg:w-36 lg:h-36 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
        </div>
    );
};

export default Loader;