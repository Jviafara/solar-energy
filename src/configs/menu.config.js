import { AiOutlineHome, AiOutlineShopping } from 'react-icons/ai';
import { FaSolarPanel } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';

const main = [
    {
        display: 'home',
        path: '/',
        icon: <AiOutlineHome size={28} />,
        state: 'home',
    },
    {
        display: 'products',
        path: '/products',
        icon: <AiOutlineShopping size={28} />,
        state: 'products',
    },
    {
        display: 'about us',
        path: '/about',
        icon: <FaSolarPanel size={28} />,
        state: 'about',
    },
    {
        display: 'contact us',
        path: '/contact',
        icon: <MdContactPhone size={28} />,
        state: 'contact',
    },
];
const menuConfigs = { main };

export default menuConfigs;
