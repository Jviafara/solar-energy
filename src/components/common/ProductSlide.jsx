import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { data } from '../../configs/data.config';
import AutoSwiper from './AutoSwiper';
import ProductCard from './ProductCard';

const ProductSlide = ({ slideType }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, []);

    return (
        <AutoSwiper>
            {slideType === 'latest' &&
                products
                    .reverse()
                    .slice(0, 8)
                    .map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className='swiper-slide w-full px-10'>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
            {slideType === 'top_rated' &&
                products
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 8)
                    .map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className='swiper-slide w-full px-10'>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
        </AutoSwiper>
    );
};

export default ProductSlide;
