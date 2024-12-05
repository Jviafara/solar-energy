import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addcartItem } from '../../redux/features/cartSlice';
import Ratings from './Ratings';

const ProductCard = (data) => {
    const product = data.product;
    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    const addToCartHandler = async () => {
        const existItem = cartItems?.find((x) => x.id === product.id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        dispatch(addcartItem({ ...product, quantity }));
    };

    return (
        <div className='w-fit h-full group duration-300 rounded-lg'>
            <div className='bg-gray-200  bg-opacity-50 backdrop-blur-2xl flex flex-col gap-2 w-fit h-full border border-pink rounded-lg shadow-md group-hover:shadow-xl hover:scale-105 duration-300'>
                <div className='object-center flex items-center justify-center'>
                    <Link to={`/product/slug/${product.name}`}>
                        <img
                            className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-lg object-contain'
                            src={product.img}
                            alt={product.name}
                        />
                    </Link>
                </div>
                <div className='px-2 py-4 lg:py-8 text-center flex flex-col items-center font-bold'>
                    <Link to={`/product/slug/${product.slug}`}>
                        <p className='text-lg xl:text-xl'>
                            {product.name.toUpperCase()}
                        </p>
                    </Link>
                    <Ratings
                        rating={product.rating}
                        numReviews={product.numReviews}
                    />
                    <p className='mt-1 text-lg'>
                        <strong>${product.price}</strong>
                    </p>
                    <button
                        onClick={addToCartHandler}
                        type='button'
                        className='rounded-lg hover:bg-[#faa784] px-2 py-1'>
                        <AiOutlineShoppingCart size={28} color='black' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
