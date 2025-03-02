// import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ContainerX from '../ContainerX';
import Social from './Social';
import Subscribe from './Subscribe';
import { HashLink as Link } from 'react-router-hash-link';
const Footer = () => {
    return (
        <div className='bg-orange-100 dark:bg-slate-900 dark:text-white'>
            <ContainerX>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 justify-center mx-auto">
                    <div className='flex flex-col gap-5 justify-center text-center md:text-left'>
                        <img src={logo} alt="Urban Foodies" className='w-24 mx-auto md:mx-0' />
                        <p className='font-semibold text-lg text-gray-700 mt-2 dark:text-white'>
                            Urban Foodies Ltd.
                            <br />
                            Providing quality foods since 2000
                        </p>
                        <Subscribe />
                    </div>
                    <div>
                        <nav className='grid w-fit mx-auto text-center my-5 md:text-left'>
                            <h6 className="footer-title">Company</h6>
                            <Link to={'/#about'} className="link link-hover">About us</Link>
                            <Link to={'/#categories'} className="link link-hover">Categories</Link>
                            <Link to={'/#top-foods'} className="link link-hover">Top Foods</Link>
                        </nav>
                    </div>
                    <Social />
                </div>
            </ContainerX>
            <aside className='m-0 bg-orange-600 text-white p-5 mt-5 text-center'>
                <p className="dark:text-white font-semibold">Copyright © {new Date().getFullYear()} - All right reserved by Urban Foodies LTD</p>
            </aside>
        </div>
    );
};

export default Footer;