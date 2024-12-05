import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceOrderForm from '../components/common/PlaceOrderForm';

const PlaceOrder = () => {
    return (
        <div className='w-[90vw] mx-auto flex flex-col items-center justify-center'>
            <Helmet>
                <title>Order Preview</title>
            </Helmet>
            <h2 className='text-center font-bold font-roboto text-3xl py-4 '>
                Order Preview
            </h2>
            <PlaceOrderForm />
        </div>
    );
};

export default PlaceOrder;
