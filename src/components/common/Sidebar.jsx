import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import menuConfigs from '../../configs/menu.config';
import Logo from './Logo';

const Sidebar = ({ open, toggleSidebar }) => {
    const { user } = useSelector((state) => state.user);

    const sideNavRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sideNavRef.current &&
                !sideNavRef.current.contains(event.target)
            ) {
                toggleSidebar();
            }
        }
        // Add event listener to the document object
        document.addEventListener('mousedown', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleSidebar]);

    return (
        <Transition show={open} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={toggleSidebar}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='fixed inset-0 backdrop-blur-sm transition-opacity' />
                </TransitionChild>
                {open && (
                    <TransitionChild
                        as={Fragment}
                        enter='transform transition ease-in-out duration-500 sm:duration-700'
                        enterFrom='-translate-x-full '
                        enterTo='translate-x-0'
                        leave='transform transition ease-in-out duration-500 sm:duration-700'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'>
                        <div
                            ref={sideNavRef}
                            id='sidebar'
                            className='w-[300px] h-screen p-4 flex flex-col gap-2 fixed inset-0 backdrop-blur-lg text-black  md:hidden'>
                            <Logo />
                            <h6 className='mt-6 mb-2 font-bold text-xl'>
                                MENU
                            </h6>
                            <ul className='flex flex-col gap-2 ml-4 justify-center'>
                                {menuConfigs.main.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.path}
                                            onClick={toggleSidebar}
                                            className='flex max-w-max items-center gap-2 rounded-lg py-1 px-2 hover:bg-gray-400 hover:scale-105'>
                                            {item.icon}
                                            <h6 className='font-medium'>
                                                {item.display.toUpperCase()}
                                            </h6>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {user && (
                                <div>
                                    <h6 className='mt-6 mb-2 font-bold text-xl'>
                                        USER
                                    </h6>
                                    <ul className='flex flex-col gap-2 ml-4 justify-center'>
                                        {menuConfigs.user.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={item.path}
                                                    onClick={toggleSidebar}
                                                    className='flex max-w-max items-center gap-2 rounded-lg py-1 px-2 hover:bg-gray-400 hover:scale-10'>
                                                    {item.icon}
                                                    <h6 className='font-medium'>
                                                        {item.display.toUpperCase()}
                                                    </h6>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </TransitionChild>
                )}
            </Dialog>
        </Transition>
    );
};

export default Sidebar;
