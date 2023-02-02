import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/menu/MainLayout';
import { privatRoutes, publicRoutes } from './router/routes';
import Home from './components/home/Home';
import { useContext } from 'react';
import { AuthContext } from './components/posts-app/context/context';

function AppRouter() {
    const { isAuth } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                {isAuth ? (
                    <Route path="/" element={<MainLayout />}>
                        <Route index={true} element={<Home />} />
                        {privatRoutes.map((route, index) => (
                            <Route
                                path={route.path}
                                element={<route.element />}
                                key={index}
                            />
                        ))}
                    </Route>
                ) : (
                    publicRoutes.map((route, index) => (
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={index}
                        />
                    ))
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
