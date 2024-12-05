import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../redux/features/cartSlice';

const PaymentButton = ({ order }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const placeOrderHandler = async () => {
        dispatch(clearCart());
        navigate(`/`);
    };
    return (
        <div>
            <StripeCheckout
                name='Payment'
                amount={order?.totalPrice * 100}
                stripeKey='pk_test_51NGzQhAWaH59OtvEbobT1NiRqKYk9Q6C5FLgWEvs4CcEz23nkODRsyBEo7hkYhMlccQcVEJ9hTV3fkUxZYQmJJl100Qeg9dxqt'>
                <button
                    type='button'
                    onClick={placeOrderHandler}
                    className='rounded-lg border bg-blue-600 p-2 px-4  w-full text-white font-bold text-lg'>
                    Pay now
                </button>
            </StripeCheckout>
        </div>
    );
};

export default PaymentButton;
