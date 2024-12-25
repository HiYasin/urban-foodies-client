import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <header className=''>

            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer className=''>

            </footer>
        </>
    );
};

export default Main;