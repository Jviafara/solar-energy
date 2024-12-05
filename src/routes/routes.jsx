import About from '../pages/About';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import HomePage from '../pages/Home';
import PlaceOrder from '../pages/PlaceOrder';
import Product from '../pages/Product';
import Products from '../pages/Products';
import ShippingAddress from '../pages/ShippingAddress';

const routes = [
    {
        index: true,
        element: <HomePage />,
        state: 'home',
    },
    {
        path: '/products',
        element: <Products />,
        state: 'products',
    },
    {
        path: '/about',
        element: <About />,
        state: 'about',
    },
    {
        path: '/contact',
        element: <Contact />,
        state: 'contact',
    },
    {
        path: 'product/slug/:name',
        element: <Product />,
        state: 'product',
    },
    {
        path: '/cart',
        element: <Cart />,
        state: 'cart',
    },
    {
        path: '/shipping-address',
        element: <ShippingAddress />,
        state: 'shipping addres',
    },
    {
        path: '/place-order',
        element: <PlaceOrder />,
        state: 'place order',
    },
    // {
    //     path: '/order/:id',
    //     element: <OrderDetails />,
    //     state: 'place order',
    // },
    // {
    //     path: '/orders',
    //     element: <Orders />,
    //     state: 'orderd history',
    // },
];

export { routes };
