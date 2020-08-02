import React from 'react';
import LoginForm from '../src/Components/auth/login';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount = () => {

    };
   
    render() {
        return(
            <>
                <h1>Login to Sponge.id</h1>
                <LoginForm/>
            </>
        )
    }
}

export default Login;