import { useEffect, useMemo, useState } from 'react';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import PostFilter from './components/PostFilter';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
    const [arrPosts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState({ sort: '', string: '' });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API_URL);
                const posts = await response.json();
                setPosts(
                    posts.map((item) => {
                        return {
                            id: item.id,
                            title: item.title,
                            discription: item.body,
                        };
                    })
                );
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    function addPost(title, discription) {
        setPosts(
            arrPosts.concat({
                id: arrPosts.length + 1,
                title: title,
                discription: discription,
            })
        );
    }

    function deletePost(id) {
        setPosts(
            arrPosts
                .filter((item) => item.id !== id)
                .map((item, index) => {
                    return { ...item, id: index + 1 };
                })
        );
    }

    const sortedPosts = useMemo(() => {
        if (filter.sort === '') {
            return arrPosts;
        }

        if (filter.sort === 'id') {
            return [...arrPosts].sort((a, b) => a.id - b.id);
        } else {
            return [...arrPosts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        }
    }, [filter.sort, arrPosts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.includes(filter.string) ||
                post.discription.includes(filter.string)
        );
    }, [filter.string, sortedPosts]);

    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>
            <h1 style={{ textAlign: 'center', padding: '10px' }}>
                Создание постов
            </h1>
            <hr />
            <CreatePost addPost={addPost} />
            <h1 style={{ textAlign: 'center', margin: '10px' }}>Посты</h1>
            <hr />
            <PostFilter filter={filter} setFilter={setFilter} />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error: {error}!</h1>
            ) : (
                <Posts
                    deletePost={deletePost}
                    arrPosts={sortedAndSearchedPosts}
                />
            )}
        </div>
    );
}

export default App;
