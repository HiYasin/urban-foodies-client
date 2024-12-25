import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';

const Main = () => {
    return (
        <>
            <header className='bg-base-100 dark:bg-slate-900 dark:text-base-100 fixed left-0 right-0 z-50 top-0 shadow-xl m-0 dark:shadow-slate-800'>
                <Navbar></Navbar>
            </header>
            <main className='py-16 sm:py-20 md:py-28 lg:py-32 dark:bg-slate-800'>
                <Outlet></Outlet>
            </main>
            <footer className='dark:bg-slate-800'>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Main;