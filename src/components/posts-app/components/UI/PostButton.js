function PostButton({ id, text, className, deletePost }) {
    return (
        <button className={className} onClick={() => deletePost(id)}>
            {text}
        </button>
    );
}

export default PostButton;
