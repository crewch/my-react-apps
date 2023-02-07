import NotFound from '../components/NotFound'
import AppPosts from '../components/posts-app/AppPosts'
import Login from '../components/posts-app/components/Login'
import PostIdPage from '../components/posts-app/components/PostIdPage'
import AppTodos from '../components/todo-app/AppTodos'
import NotFoundLogin from '../NotFoundLogin'

export const privatRoutes = [
	{ path: 'posts', element: AppPosts },
	{ path: 'todos', element: AppTodos },
	{ path: 'posts/:pageId', element: PostIdPage },
	{ path: '*', element: NotFound },
]

export const publicRoutes = [
	{ path: '/login', element: Login },
	{ path: '*', element: NotFoundLogin },
]
