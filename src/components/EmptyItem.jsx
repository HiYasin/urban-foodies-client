import React from 'react';

const EmptyItem = () => {
    return (
        <div className='h-[50vh] w-11/12 max-w-screen-md mx-auto text-orange-600 text-2xl flex justify-center items-center'>
            <div className="text-center font-bold">
                No Data Found!
            </div>
        </div>
    );
};

export default EmptyItem;