import React from 'react';
import Post from '../components/Post';
import style from './Posts.module.css';

function Posts({ arrPosts, deletePost }) {
    if (!arrPosts.length) {
        return <h2 className={style.h2}>Постов нет</h2>;
    }

    return (
        <div className={style.posts}>
            {arrPosts.map((post, index) => {
                return (
                    <Post
                        {...post}
                        deletePost={deletePost}
                        index={index}
                        key={post.id}
                    />
                );
            })}
        </div>
    );
}

export default Posts;
