import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function NotFound() {
    const params = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (params.slug !== 'todos' || 'posts') {
            navigator('..');
        }
    }, [navigator, params.slug]);

    return <h1 style={{ textAlign: 'center' }}>Not Found</h1>;
}

export default NotFound;
