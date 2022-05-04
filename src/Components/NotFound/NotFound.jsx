import React from 'react';
import Error from '../../Photo/pikabu.gif'

const NotFound = () => {
    return (
        <div className='flex items-center bg-[#f6f6f6] h-[80vh] justify-center'>
            <img className='' src={Error} alt="" />
        </div>
    );
};

export default NotFound;