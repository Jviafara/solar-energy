import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Ratings from '../components/common/Ratings';
import { data } from '../configs/data.config';
import { addcartItem } from '../redux/features/cartSlice';

const Product = () => {
    const params = useParams();
    const { name } = params;

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const p = data.find((product) => product.name === name);

        setProduct(p);
    }, [name]);

    const addToCartHandler = async () => {
        const existItem = cartItems?.find((x) => x.id === product.id);
        const quantity = existItem ? existItem.quantity + 1 : 1;

        if (product.countInStock < quantity) {
            toast.error('Product Out of Stock');
            return;
        }

        dispatch(addcartItem({ ...product, quantity }));
    };

    return (
        <div className='w-[95vw] md:max-w-[90vw] mx-auto  flex flex-col md:flex-row gap-4 p-4 justify-evenly'>
            <Helmet>
                <title>{product.name}</title>
            </Helmet>
            <div className='md:w-[50vw] lg:w-[45vw] xl:w-[40vw] shadow-lg flex items-center justify-center'>
                <img src={product.img} alt='product' />
            </div>
            <div className='w-full lg:w-[50%] xl:w-[30%]  flex flex-col xl:flex-row xl:justify-center gap-4 shadow-lg rounded-lg border border-yellow h-fit'>
                <ul className='flex flex-col gap-2 p-4 w-full'>
                    <li className='flex justify-between'>
                        <h1 className='text-lg font-bold'>{product.name}</h1>
                    </li>
                    <hr className='border border-yellow' />
                    <li className='my-2'>
                        <p>
                            <strong>${product.price}</strong>
                        </p>
                    </li>
                    <hr className='border border-yellow' />
                    <li className='my-2'>
                        <p>{product.description}</p>
                    </li>
                    <hr className='border border-yellow' />
                    <li className='my-2'>
                        <Ratings
                            rating={product.rating}
                            numReviews={product.numReviews}
                        />
                    </li>
                    <hr className='border border-yellow' />
                    <li>
                        <button
                            onClick={addToCartHandler}
                            type='button'
                            className='w-full md:w-1/2 rounded-lg border hover:bg-blue-500 bg-yellow py-3 px-4
                                        text-white font-bold font-serif text-lg mt-4'>
                            Add to Cart
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Product;
