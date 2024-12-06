import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PageWrapper = ({ state, children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [state, dispatch]);

    return children;
};

export default PageWrapper;
