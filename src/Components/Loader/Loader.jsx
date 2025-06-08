import React from 'react';

const Loader = () => {
    return (
        <div className='py-10 lg:py-20 flex justify-center'>
            {/* <div className="w-16 lg:w-36 lg:h-36 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div> */}
            <img className="w-20 h-20 lg:w-36 lg:h-36 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon"></img>
        </div>
    );
};

export default Loader;