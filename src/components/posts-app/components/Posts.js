import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from '../components/Post';
import style from './Posts.module.css';

function Posts({ arrPosts, deletePost }) {
    if (!arrPosts.length) {
        return <h2 className={style.h2}>Постов нет</h2>;
    }

    return (
        <TransitionGroup className={style.posts}>
            {arrPosts.map((post, index) => (
                <CSSTransition key={post.id} timeout={500} classNames="item">
                    <Post
                        {...post}
                        deletePost={deletePost}
                        index={index}
                        key={post.id}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

export default Posts;
