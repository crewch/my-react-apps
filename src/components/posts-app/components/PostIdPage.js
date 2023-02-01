import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostServise from '../API/PostServise';
import Loader from './UI/Loader';
import style from './PostIdPage.module.css';
import Comments from './Comments';

function PostIdPage() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const navigator = useNavigate();

    const params = useParams();
    const [fetching] = useFetching(async () => {
        const response = await PostServise.getByid(params.pageId);
        const comments = await PostServise.getCommentsByPostId(params.pageId);
        setPost(response.data);
        setComments(comments.data);
    });

    useEffect(() => {
        fetching();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (post === null) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '50px',
                }}
            >
                <Loader />
            </div>
        );
    } else {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <button
                    className={style.createBnt}
                    onClick={() => navigator(-1)}
                >
                    Назад
                </button>
                <div style={{ textAlign: 'center' }}>
                    <h1>
                        {post.id}. {post.title}
                    </h1>
                    <p>{post.body}</p>
                </div>
                <div>
                    <h1 style={{ margin: '15px', padding: '5px' }}>
                        Комментарии:
                    </h1>
                    {comments.map((comment, index) => (
                        <Comments {...comment} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}

export default PostIdPage;
