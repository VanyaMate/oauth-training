import { Button, Divider, Icon, Segment } from 'semantic-ui-react';
import css from './login-page.module.scss';


const LoginPage = () => {
    const googleLogin = function () {
        window.open('http://localhost:3000/auth/google', '_self');
    };


    return (
        <Segment textAlign={ 'center' } className={ css.container }>
            <h1>Login</h1>
            <Divider horizontal>OAuth</Divider>
            <Button color={ 'google plus' } onClick={ googleLogin }>
                <Icon name={ 'google' }/> Google
            </Button>
            <Button color={ 'grey' }>
                <Icon name={ 'github' }/> Git
            </Button>
            <Button color={ 'vk' }>
                <Icon name={ 'vk' }/> VK
            </Button>
            <Divider horizontal>Email</Divider>
        </Segment>
    );
};

export default LoginPage;