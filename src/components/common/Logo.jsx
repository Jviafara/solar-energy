import { FaSolarPanel } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className='flex gap-2 justify-center items-center h-full'>
            <FaSolarPanel size={28} color='#fc8403' />
            <div className='flex-col justify-center md:flex-row  items-center gap-1 hidden md:flex'>
                <h1 className='font-bold text-lg text-[#fc8403]'>
                    Solar<span className='text-[#e5e04a]'>Energy FDD</span>
                </h1>
            </div>
        </div>
    );
};

export default Logo;
