import { useEffect, useMemo, useState } from 'react';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';
import { v4 as uuidv4 } from 'uuid';
import style from './AppPosts.module.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
    const [arrPosts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState({ sort: '', string: '' });
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API_URL);
                const posts = await response.json();
                setPosts(
                    posts.map((item) => {
                        return {
                            id: uuidv4(),
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
                id: uuidv4(),
                title: title,
                discription: discription,
            })
        );
        setModalState(false);
    }

    function deletePost(id) {
        setPosts(
            arrPosts
                .filter((item) => item.id !== id)
                .map((item) => {
                    return { ...item, id: uuidv4() };
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
            <MyModal modalState={modalState} setModalState={setModalState}>
                <CreatePost addPost={addPost} />
            </MyModal>
            <h1 style={{ textAlign: 'center', margin: '10px' }}>Посты</h1>
            <hr />
            <div style={{ display: 'flex' }}>
                <button
                    onClick={() => setModalState(true)}
                    className={style.createBnt}
                >
                    Создать пост
                </button>
                <PostFilter filter={filter} setFilter={setFilter} />
            </div>
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
