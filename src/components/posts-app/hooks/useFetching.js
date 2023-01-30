import { useState } from 'react';

export const useFetching = (callback) => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetching = async () => {
        try {
            await callback();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
};
