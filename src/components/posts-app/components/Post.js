import PostButton from './UI/PostButton'
import style from './Post.module.css'
import { useNavigate } from 'react-router-dom'

function Post({ id, pageId, title, discription, deletePost }) {
	const router = useNavigate()
	return (
		<div className={style.post}>
			<div>
				<h2>
					{pageId}. {title}
				</h2>
				<p>{discription}</p>
			</div>
			<div style={{ display: 'flex' }}>
				<button
					onClick={() => router(`/posts/${pageId}`)}
					className={style.postBtn}
				>
					Открыть
				</button>
				<PostButton
					text='Удалить'
					className={style.postBtn}
					deletePost={deletePost}
					id={id}
				/>
			</div>
		</div>
	)
}

export default Post
