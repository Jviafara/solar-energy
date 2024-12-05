import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { TiThMenuOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import menuConfigs from '../../configs/menu.config';
import { setAuthModalOpen } from '../../redux/features/authModalSlice';
import Logo from './Logo';
import Sidebar from './Sidebar';
import UserMenu from './UserMenu';

const Navbar = () => {
    const { user } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cart);

    const { pathname } = useLocation();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const dispatch = useDispatch();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const toggleMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };

    return (
        <div className='shadow-smbg-gray-200 bg-opacity-50 backdrop-blur-2xl py-4 md:px-4 text-black max-w-[100vw] w-full'>
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
            <UserMenu open={userMenuOpen} toggleMenu={toggleMenu} />
            <nav className='flex items-center justify-between gap-0 px-4'>
                <div className='flex gap-4 w-full md:w-[25%]'>
                    <div
                        onClick={toggleSidebar}
                        className='md:hidden p-2 hover:scale-105 hover:shadow-lg rounded-full text-lg'>
                        <TiThMenuOutline size={24} />
                    </div>
                    <Link to='/products' className='hidden lg:inline-flex'>
                        <AiOutlineSearch size={28} />
                    </Link>
                    <div className=''>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                </div>

                <ul className='md:w-[60%] hidden md:flex items-center gap-8 text-xl justify-center font-bold'>
                    {menuConfigs.main.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`flex max-w-max items-center gap-2  hover:text-[#fc8403] hover:scale-105 ${
                                    pathname === item.path
                                        ? 'text-[#fc8403]'
                                        : 'hover:text-[#fc8403]'
                                }`}>
                                {item.icon}
                                <h6 className='font-medium hidden xl:flex'>
                                    {item.display.toUpperCase()}
                                </h6>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='list-none flex w-full md:w-[25%] justify-end ml-auto items-center gap-1'>
                    <li className='py-2 px-1 flex items-center  hover:shadow-lg rounded-full text-lg'>
                        <NavLink to='/cart' className='flex items-center gap-1'>
                            <HiShoppingCart size={24} />
                            {cartItems?.length > 0 && (
                                <span className='bg-red-600 text-white text-xs  font-bold px-1 lg:px-1.5 py-0.5 rounded-full h-full relative -top-2 -left-3  dark:bg-red-600 dark:text-white'>
                                    {cartItems.reduce(
                                        (a, c) => a + c.quantity,
                                        0
                                    )}
                                </span>
                            )}
                        </NavLink>
                    </li>
                    {!user && (
                        <li className='p-2 hover:shadow-lg rounded-full text-lg'>
                            <button
                                onClick={() => dispatch(setAuthModalOpen(true))}
                                className='cursor-pointer flex items-center gap-1'>
                                <h1>Sign In</h1>
                            </button>
                        </li>
                    )}
                    {user && (
                        <li className='p-2 hover:shadow-lg rounded-full text-lg'>
                            <div
                                onClick={toggleMenu}
                                className='flex gap-2 items-center'>
                                <FaUserCircle size={24} />
                                <h1 className='hidden md:inline-flex font-bold'>
                                    {user?.name?.toUpperCase().split(' ')[0]}
                                </h1>
                            </div>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
