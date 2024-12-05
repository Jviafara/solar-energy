import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PaymentButton from './PaymentButton';
import ProductsCartTable from './ProductsCartTable';

const PlaceOrderForm = () => {
    const { cartItems, shippingAddress } = useSelector((state) => state.cart);

    const [itemsPrice, setItemsPrice] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

    useEffect(() => {
        setItemsPrice(
            round2(cartItems.reduce((a, c) => a + c.quantity * c.price, 0))
        );
        setShippingPrice(itemsPrice * 0.1);
        setTotalPrice(itemsPrice + shippingPrice);
    }, [cartItems, shippingPrice, totalPrice, itemsPrice]);

    return (
        <div className='max-w-[95vw] xl:max-w-[85vw]'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <section className='w-full lg:w-[70%] flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 p-6  border border-yellow rounded-lg shadow'>
                        <h1 className='text-2xl font-medium '>Shipping</h1>
                        <div>
                            <p className='text-lg'>
                                <strong>Name:</strong> {shippingAddress?.name}
                            </p>
                            <p>
                                <strong>City:</strong> {shippingAddress?.city}
                            </p>
                            <p>
                                <strong>Address:</strong>{' '}
                                {shippingAddress?.address}
                            </p>
                        </div>
                        <Link
                            to={'/shipping-address'}
                            className='underline text-blue-600 text-lg mt-2 '>
                            Edit
                        </Link>
                    </div>
                    <div className='flex flex-col gap-3 p-1 md:p-6 border border-yellow rounded-lg shadow'>
                        <h1 className='text-2xl font-medium '>Items</h1>
                        <div className='w-full overflow-hidden'>
                            {cartItems.length > 0 ? (
                                <div>
                                    <ProductsCartTable />
                                </div>
                            ) : (
                                <div className='w-full rounded-lg h-fit bg-cyan-100 p-6'>
                                    <p className='text-2xl text-cente line text-blue-900'>
                                        Cart Is Empty.{'  '}
                                        <Link
                                            to='/products'
                                            className='underline text-blue-700'>
                                            Go Shopping
                                        </Link>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className='w-full lg:w-[30%] xl:mx-4 xl:px-6'>
                    <div className='flex flex-col gap-2 p-6 border border-yellow rounded-lg'>
                        <h1 className='text-2xl font-medium mb-2'>
                            Order Summary
                        </h1>
                        <div className='flex justify-between px-4 lg:p-0 text-2xl'>
                            <div className='w-2/3'>
                                <p>Items</p>
                            </div>
                            <p>${itemsPrice}</p>
                        </div>
                        <hr className='border border-yellow' />
                        <div className='flex justify-between items-center px-4 lg:p-0 text-2xl'>
                            <div className='w-2/3'>
                                <p>Shipping</p>
                            </div>
                            <p>${shippingPrice}</p>
                        </div>
                        <hr className='border border-yellow' />
                        <div className='flex justify-between px-4 lg:p-0 text-2xl font-bold'>
                            <div className='w-2/3'>
                                <p>Order Total</p>
                            </div>
                            <p>${totalPrice}</p>
                        </div>
                        <hr className='border border-yellow' />
                        {cartItems.length > 0 && (
                            <div className='flex flex-col gap-3'>
                                <div className='w-full '>
                                    <PaymentButton order={cartItems} />
                                    <h1 className='mt-4 text-center'>
                                        Demo card: 4242 4242 4242 4242 / any
                                        future date / any 3 digit CVV
                                    </h1>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PlaceOrderForm;
