import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container';

function About() {
    return (
        <div className='flex flex-col items-center relative -z-[10]  mt-4 mb-16'>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className='mb-20 px-4'>
                <img src='./assets/banner.jpg' alt='banner' />
            </div>
            <div className='w-[65%]'>
                <Container header={'misión'}>
                    <p className='text-2xl font-semibold leading-8 text-justify'>
                        Proveer soluciones energéticas sostenibles mediante la
                        implementación de sistemas de energía solar innovadores
                        y accesibles, promoviendo el desarrollo ambiental,
                        económico y social en Valledupar y la región del Cesar.
                        Nos comprometemos a mejorar la calidad de vida de
                        nuestros clientes mediante el uso de tecnologías limpias
                        y eficientes, fomentando un futuro más verde y
                        responsable.
                    </p>
                </Container>
            </div>
            <div className='w-[65%]'>
                <Container header={'visión'}>
                    <p className='text-2xl font-semibold leading-8 text-justify'>
                        Ser reconocidos como líderes en la transformación
                        energética del Cesar y la región Caribe, promoviendo el
                        uso masivo de energía solar como fuente principal de
                        energía sostenible. Aspiramos a ser una empresa
                        innovadora, comprometida con la protección del medio
                        ambiente y con el empoderamiento de las comunidades
                        hacia un desarrollo sostenible. Si tienes ideas más
                        específicas o valores únicos de tu empresa, puedo
                        ayudarte a personalizar aún más estas propuestas.
                    </p>
                </Container>
            </div>
            <div className='mb-20 max-w-[90vw]'>
                <img src='./assets/servicios.jpg' alt='banner' />
            </div>
        </div>
    );
}

export default About;
