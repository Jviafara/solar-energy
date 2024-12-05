import { SwiperSlide } from 'swiper/react';
import NavigationSwiper from './NavigationSwiper';

const HeaderSlide = () => {
    const images = [
        {
            name: 'I1',
            url: 'https://cdn.pixabay.com/photo/2018/02/02/11/00/energy-3125125_1280.jpg',
        },
        {
            name: 'I2',
            url: 'https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_1280.jpg',
        },
        {
            name: 'I3',
            url: 'https://cdn.pixabay.com/photo/2023/09/10/11/16/solar-8244680_1280.jpg',
        },
        {
            name: 'I4',
            url: 'https://cdn.pixabay.com/photo/2015/07/27/14/11/solar-power-862602_1280.jpg',
        },
        {
            name: 'I5',
            url: 'https://cdn.pixabay.com/photo/2019/10/04/09/47/photovoltaic-4525178_1280.jpg',
        },
        {
            name: 'I6',
            url: 'https://cdn.pixabay.com/photo/2019/10/04/09/46/photovoltaic-4525177_1280.jpg',
        },
        {
            name: 'I7',
            url: 'https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_1280.jpg',
        },
        {
            name: 'I8',
            url: 'https://cdn.pixabay.com/photo/2024/02/24/10/48/solar-panels-8593759_1280.png',
        },
    ];

    return (
        <div className='lg:w-2/3 mx-auto mt-16'>
            <NavigationSwiper>
                {images.map((image, name) => (
                    <SwiperSlide key={name} className=' px-10 pt-4 pb-10 '>
                        <div className='flex items-center justify-center'>
                            <img
                                src={image.url}
                                alt='img'
                                className=' object-fill'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </NavigationSwiper>
        </div>
    );
};

export default HeaderSlide;
