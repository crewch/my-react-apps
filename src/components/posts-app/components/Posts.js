import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Post from '../components/Post';
import style from './Posts.module.css';

function Posts({ arrPosts, deletePost }) {
    return (
        <div className={style.posts}>
            {arrPosts.length ? (
                arrPosts.map((post) => {
                    return (
                        <Post
                            {...post}
                            key={uuidv4()}
                            deletePost={deletePost}
                        />
                    );
                })
            ) : (
                <h2 className={style.h2}>Постов нет</h2>
            )}
        </div>
    );
}

export default Posts;
