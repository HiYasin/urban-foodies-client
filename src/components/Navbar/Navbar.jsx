
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import ThemeController from '../ThemeController';
const Navbar = () => {
    const user = null;
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all_foods'}>All Foods</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
    </>
    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start w-full md:w-[50%]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm md:btn-md border-none lg:hidden bg-orange-600 text-white mr-2">
                        <MdMenu></MdMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 dark:bg-slate-900">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl md:text-3xl font-extrabold text-slate-800 dark:text-white">Urban <span className='text-orange-600'>Foodies</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1 menu-items">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-1 md:space-x-2">
                <ThemeController></ThemeController>
                <div>
                    {
                        user ? <button className='bg-orange-600 text-white border-none btn-sm'>Logout</button> : <Link to={'/login'} className="btn bg-orange-600 text-white border-none btn-sm">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;