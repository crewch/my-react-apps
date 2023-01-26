import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigator = useNavigate();

    useEffect(() => {
        navigator(-1);
    }, [navigator]);
}

export default NotFound;
