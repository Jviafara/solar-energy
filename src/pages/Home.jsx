import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';
import ProductSlide from '../components/common/ProductSlide';

const Home = () => {
    return (
        <div className='flex flex-col items-center relative -z-[10]  mt-4 mb-16'>
            <Helmet>
                <title>SolarEnergyFDD</title>
            </Helmet>
            <Container header={'new products'} seeMore={'/products'}>
                <ProductSlide slideType='latest' />
            </Container>
            <Container header={'Top Rated'} seeMore={'/products'}>
                <ProductSlide slideType='top_rated' />
            </Container>
        </div>
    );
};

export default Home;
