import React from 'react';

const Subscribe = () => {
    return (
        <div className="join">
            <div>
                <input className="input input-bordered join-item" placeholder="Enter Your Email" />
            </div>
            <div>
                <button className="btn join-item bg-orange-600 dark:text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;