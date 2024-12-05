import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
function Contact() {
    return (
        <div className='flex flex-col items-center relative -z-[10]  mt-4 mb-16'>
            <Container header='Contacto'>
                <div className='w-full flex flex-col gap-4 '>
                    <Link
                        to='https://api.whatsapp.com/send/?phone=573017558012&text&type=phone_number&app_absent=0'
                        target='_blank'
                        className='link_hover'>
                        <FaWhatsapp size={28} />
                        <p className='font-semibold text-xl '>
                            +57 301 7558012
                        </p>
                    </Link>
                    <Link
                        to='https://api.whatsapp.com/send/?phone=573017558012&text&type=phone_number&app_absent=0'
                        target='_blank'
                        className='link_hover'>
                        <FaWhatsapp size={28} />
                        <p className='font-semibold text-xl'>+57 301 1257674</p>
                    </Link>
                    <Link
                        to='mailto:solarenergyfdd@gmail.com'
                        target='_blank'
                        className='link_hover'>
                        <MdEmail size={28} />
                        <p className='font-semibold text-xl'>
                            solarenergyfdd@gmail.com
                        </p>
                    </Link>
                    <div className='flex gap-4'>
                        <FaMapMarkerAlt size={28} />
                        <p className='font-semibold text-xl'>
                            Alamos 3 Mz G #23, Valledupar-Cesar, Colombia
                        </p>
                    </div>
                </div>
            </Container>
            <div className='w-full px-4 md:px-12'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.4557566145736!2d-73.26536072294965!3d10.447505188014807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9f080d12dbb%3A0xd05ad5cea941afcd!2sALAMOS%20III%2C%20Cra.%2032A%2C%20Valledupar%2C%20Cesar!5e0!3m2!1ses!2sco!4v1733403749992!5m2!1ses!2sco'
                    width='600'
                    height='450'
                    title='location'
                    className='border-none w-full'
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'></iframe>
            </div>
        </div>
    );
}

export default Contact;
