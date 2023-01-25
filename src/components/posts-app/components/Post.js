import PostButton from './UI/PostButton';
import style from './Post.module.css'

function Post({ id, title, discription, deletePost }) {
    return (
        <div className={style.post}>
            <div>
                <h2>
                    {id}. {title}
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
