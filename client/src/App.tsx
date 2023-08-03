import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.tsx';
import LoginPage from './pages/login-page/login-page.tsx';
import Navbar from './components/navbar/navbar.tsx';


const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={ '/' } element={ <HomePage/> }/>
                <Route path={ '/login' } element={ <LoginPage/> }/>
            </Routes>
        </>
    );
};

export default App;