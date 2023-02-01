import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/menu/MainLayout';
import Home from './components/home/Home';
import AppPosts from './components/posts-app/AppPosts.js';
import AppTodos from './components/todo-app/AppTodos.js';
import './App.css';
import NotFound from './components/NotFound';
import PostIdPage from './components/posts-app/components/PostIdPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index={true} element={<Home />} />
                        <Route path="posts" element={<AppPosts />} />
                        <Route path="todos" element={<AppTodos />} />
                        <Route path="posts/:pageId" element={<PostIdPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
