/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import {
    setShippingAddress,
    setcartItems,
} from '../../redux/features/cartSlice';
import Footer from '../common/Footer';
import HeaderSlide from '../common/HeaderSlide';
import Navbar from '../common/Navbar';

const MainLayout = () => {
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        const getCartItems = async () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems'));
            dispatch(setcartItems(cartItems));
        };
        getCartItems();
    }, [dispatch]);

    useEffect(() => {
        const getShippingAddress = async () => {
            const shippingAddress = JSON.parse(
                localStorage.getItem('shippingAddress')
            );
            dispatch(setShippingAddress(shippingAddress));
        };
        getShippingAddress();
    }, [dispatch]);

    return (
        <div className='max-w-[100vw] w-full  min-h-screen'>
            <div className='flex flex-col w-full'>
                {/* header */}
                {location.pathname === '/' ? (
                    <header>
                        <div className='w-full fixed top-0 left-0 z-[10] flex flex-col items-center bg-gray-200 bg-opacity-50 backdrop-blur-2xl'>
                            <Navbar />
                        </div>
                        <HeaderSlide />
                    </header>
                ) : (
                    <div className='w-full fixed top-0 left-0 z-[10] flex flex-col items-center bg-gray-200 bg-opacity-50 backdrop-blur-2xl'>
                        <Navbar />
                    </div>
                )}

                {/* header */}

                {/* main */}
                <div className='w-full relative z-0 min-h-[60vh] overflow-hidden my-12 pt-10 flex-grow'>
                    <Outlet />
                </div>
                {/* main */}
            </div>

            <div className='fixed bottom-2 md:bottom-10 right-2 md:right-10 z-10'>
                <button
                    type='button'
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                    className='hidden md:inline-flex cursor-pointer'>
                    <BsFillArrowUpSquareFill size={45} />
                </button>
                <button
                    type='button'
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                    className='md:hidden inline-flex cursor-pointer'>
                    <BsFillArrowUpSquareFill size={24} />
                </button>
            </div>

            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
    );
};

export default MainLayout;
