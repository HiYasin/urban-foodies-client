import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';
import ContainerX from '../components/ContainerX';

const Main = () => {
    return (
        <>
            <header className='backdrop-blur-xl dark:text-base-100 fixed left-0 right-0 z-50 top-0 shadow-xl m-0 dark:shadow-slate-300/5 bg-orange-600/20 dark:bg-slate-900/70'>
                <ContainerX>
                    <Navbar></Navbar>
                </ContainerX>
            </header>
            <main className='py-16 dark:bg-slate-800'>
                <Outlet></Outlet>
            </main>
            <footer className='dark:bg-slate-800'>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Main;