import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { data } from '../../configs/data.config';
import ProductCard from './ProductCard';
import ProductNotFound from './ProductNotFound';

const ProductGrid = ({ filter, priceFilter, priceSort, query }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (
            data.filter(
                (product) =>
                    product.name
                        ?.toLowerCase()
                        ?.includes(query?.toLowerCase()) ||
                    product.category
                        ?.toLowerCase()
                        ?.includes(query?.toLowerCase())
            ).length <= 0
        )
            toast.error('Product not found');
        setProducts(
            data.filter(
                (product) =>
                    product.name
                        ?.toLowerCase()
                        ?.includes(query?.toLowerCase()) ||
                    product.category
                        ?.toLowerCase()
                        ?.includes(query?.toLowerCase())
            )
        );
    }, [query]);

    useEffect(() => {
        if (data) {
            if (priceSort === 'Lower to Higher') {
                setProducts(data.sort((a, b) => a.price - b.price));
            } else if (priceSort === 'Higher to Lower') {
                setProducts(data.sort((a, b) => b.price - a.price));
            } else if (priceSort === 'Latest') {
                setProducts(data.reverse());
            } else if (priceSort === 'top_rated') {
                setProducts(data.sort((a, b) => b.rating - a.rating));
            } else {
                setProducts(data);
            }
        }
    }, [priceSort]);

    useEffect(() => {
        setProducts(data);
    }, []);

    return (
        <div className='w-[95vw] md:w-[90vw] flex flex-col items-center pb-12'>
            <p className='my-2'>
                {'Category: ' +
                    filter.toUpperCase() +
                    ' / Min Price: ' +
                    priceFilter[0] +
                    ' / Max Price: ' +
                    priceFilter[1] +
                    ' / Sort: ' +
                    priceSort.toUpperCase()}
            </p>
            {filter !== 'All products' &&
                products
                    ?.filter((product) => product.category === filter)
                    ?.filter(
                        (product) =>
                            (product.price >= priceFilter[0]) &
                            (product.price <= priceFilter[1])
                    ).length <= 0 && <ProductNotFound />}
            {filter === 'All products' &&
                products?.filter(
                    (product) =>
                        (product.price >= priceFilter[0]) &
                        (product.price <= priceFilter[1])
                )?.length <= 0 && <ProductNotFound />}
            <div className='w-[80vw] grid gap-8 xl:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center justify-stretch'>
                {filter !== 'All products' &&
                    products
                        ?.filter((product) => product.category === filter)
                        ?.filter(
                            (product) =>
                                (product.price >= priceFilter[0]) &
                                (product.price <= priceFilter[1])
                        )
                        ?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                {filter === 'All products' &&
                    products
                        ?.filter(
                            (product) =>
                                (product.price >= priceFilter[0]) &
                                (product.price <= priceFilter[1])
                        )
                        .map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
            </div>
        </div>
    );
};

export default ProductGrid;
