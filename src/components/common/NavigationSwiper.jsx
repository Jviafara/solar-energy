import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

const NavigationSwiper = ({ children }) => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Swiper
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className='w-full max-h-max p-0 '>
                {children}
            </Swiper>
        </div>
    );
};

export default NavigationSwiper;
