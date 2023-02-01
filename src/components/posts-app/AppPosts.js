import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';
import { usePosts } from './hooks/usePosts';
import PostServise from './API/PostServise';
import Loader from './components/UI/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';
import Pagination from './components/UI/Pagination';
import style from './AppPosts.module.css';
import './Animations.css';

function App() {
    const [arrPosts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', string: '' });
    const [modalState, setModalState] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page);
        setPosts(
            response.data.map((item) => {
                return {
                    id: uuidv4(),
                    pageId: item.id,
                    title: item.title,
                    discription: item.body,
                };
            })
        );

        const totalCount = response.headers['x-total-count'];

        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetching();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit]);

    function addPost(title, discription) {
        setPosts(
            arrPosts.concat({
                id: uuidv4(),
                pageId: arrPosts.at(-1).pageId + 1,
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
                <div>
                    <button
                        className={style.createBnt}
                        onClick={() => setLimit(10)}
                    >
                        лимит 10
                    </button>
                    <button
                        className={style.createBnt}
                        onClick={() => setLimit(20)}
                    >
                        лимит 20
                    </button>
                </div>
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
            <Pagination totalPages={totalPages} setPage={setPage} page={page} />
        </div>
    );
}

export default App;
