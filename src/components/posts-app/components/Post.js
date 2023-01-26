import PostButton from './UI/PostButton';
import style from './Post.module.css';

function Post({ id, title, discription, deletePost, index }) {
    return (
        <div className={style.post}>
            <div>
                <h2>
                    {index + 1}. {title}
                </h2>
                <p>{discription}</p>
            </div>
            <PostButton
                text="Удалить"
                className={style.postBtn}
                deletePost={deletePost}
                id={id}
            />
        </div>
    );
}

export default Post;
