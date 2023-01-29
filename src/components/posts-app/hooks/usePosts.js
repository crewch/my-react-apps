import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === '') {
            return posts;
        }

        if (sort === 'id') {
            return [...posts].sort((a, b) => a.id - b.id);
        } else {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
    }, [sort, posts]);

    return sortedPosts;
};

export const usePosts = (posts, sort, string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.includes(string) || post.discription.includes(string)
        );
    }, [string, sortedPosts]);

    return sortedAndSearchedPosts;
};
