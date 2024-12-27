
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import ThemeController from '../ThemeController';
import logo from '../../assets/logo.png';
import useAuth from '../../customHooks/useAuth';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const handleSignOut = () => {
        
        signOutUser()
            .then(() => {
                console.log('User signed out');
                Swal.fire({
                    title: 'LogOut',
                    text: 'User logged out successfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#ea580c"
                });
            })
            .then(err => console.log(err));
    }
    console.log(user?.displayName);
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-foods'}>All Foods</NavLink></li>
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
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 bg-base-100 dark:bg-slate-900 text-orange-600 font-bold">
                        {navItems}
                    </ul>
                </div>
                <img src={logo} alt="Urban Foodies" className='w-14 hidden sm:flex'/>
                <Link to={'/'} className="text-xl md:text-3xl font-extrabold text-slate-800 dark:text-white">Urban <span className='text-orange-600'>Foodies</span></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-1 menu-items text-orange-600 font-bold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2 flex items-center">
                <ThemeController></ThemeController>
                <div>
                    {
                        user ?
                            <button className='btn bg-orange-600 text-white border-none btn-sm' onClick={handleSignOut}>Logout</button>
                            :
                            <Link to={'/login'} className="btn bg-orange-600 text-white border-none btn-sm" >Login</Link>
                    }
                </div>

                <div className="dropdown dropdown-end mx-1">
                    {
                        user && <div className="avatar" tabIndex={0} role="button" >
                            <div className="ring-orange-500 w-10 rounded-full ring">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    }
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-slate-900 text-orange-600 font-bold">
                        <li className='text-center border-b-[1px] py-2'>{user?.displayName}</li>
                        <li><NavLink to={'/my-foods'}>My Foods</NavLink></li>
                        <li><NavLink to={'/add-food'}>Add Foods</NavLink></li>
                        <li> <NavLink to={'/my-orders'}>My Orders</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;