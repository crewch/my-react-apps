import PostButton from './UI/PostButton';
import style from './Post.module.css';

function Post({ id, pageId, title, discription, deletePost, index }) {
    return (
        <div className={style.post}>
            <div>
                <h2>
                    {pageId}. {title}
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
