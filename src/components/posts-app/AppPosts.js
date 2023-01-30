import { useEffect, useState } from 'react';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';
import { v4 as uuidv4 } from 'uuid';
import { usePosts } from './hooks/usePosts';
import PostServise from './API/PostServise';
import Loader from './components/UI/Loader';
import { useFetching } from './hooks/useFetching';
import style from './AppPosts.module.css';
import './Animations.css';

function App() {
    const [arrPosts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', string: '' });
    const [modalState, setModalState] = useState(false);

    const [fetching, isLoading, error] = useFetching(async () => {
        const posts = await PostServise.getAll();
        setPosts(
            posts.map((item) => {
                return {
                    id: uuidv4(),
                    title: item.title,
                    discription: item.body,
                };
            })
        );
    });

    useEffect(() => {
        fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setPosts(arrPosts.filter((item) => item.id !== id));
    }

    const sortedAndSearchedPosts = usePosts(
        arrPosts,
        filter.sort,
        filter.string
    );

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
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '50px',
                    }}
                >
                    <Loader />
                </div>
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
