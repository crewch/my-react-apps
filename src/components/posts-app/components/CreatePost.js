import { useState } from 'react'
import Input from './UI/Input'
import CreatePostButton from './UI/CreatePostButton'
import style from './CreatePost.module.css'

function CreatePost({ addPost }) {
	const [post, setPost] = useState({
		title: '',
		discription: '',
	})

	function handleChange(e, name) {
		setPost({ ...post, [name]: e.target.value })
	}

	function submit(e) {
		e.preventDefault()
		addPost(post.title, post.discription)
		setPost({
			title: '',
			discription: '',
		})
	}

	return (
		<form className={style.createPost} onSubmit={e => submit(e)}>
			<Input
				text='Название поста'
				func={e => handleChange(e, 'title')}
				className={style.createInput}
				value={post.title}
			/>
			<Input
				text='Описание поста'
				func={e => handleChange(e, 'discription')}
				className={style.createInput}
				value={post.discription}
			/>
			<CreatePostButton text='Создать пост' className={style.createBnt} />
		</form>
	)
}

export default CreatePost
