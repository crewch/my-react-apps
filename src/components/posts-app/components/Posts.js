import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Post from '../components/Post';
import style from './Posts.module.css';

function Posts({ arrPosts, deletePost }) {
    if (!arrPosts.length) {
        return <h2 className={style.h2}>Постов нет</h2>;
    }

    return (
        <div className={style.posts}>
            {arrPosts.map((post) => {
                return (
                    <Post {...post} key={uuidv4()} deletePost={deletePost} />
                );
            })}
        </div>
    );
}

export default Posts;
