import { Menu } from 'semantic-ui-react';
import {
    useLocation,
    useNavigate,
} from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const navigate  = useNavigate();

    return (
        <Menu pointing>
            <Menu.Item
                name={ 'HomePage' }
                active={ location.pathname === '/' }
                onClick={ () => navigate('/') }
            />
            <Menu.Item
                name={ 'Login' }
                active={ location.pathname === '/login' }
                onClick={ () => navigate('/login') }
            />
        </Menu>
    );
};

export default Navbar;