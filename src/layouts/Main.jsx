import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';

const Main = () => {
    return (
        <>
            <header className='dark:bg-slate-900 dark:text-base-100'>
                <Navbar></Navbar>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer className=''>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Main;