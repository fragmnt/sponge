import React from 'react';
import LoginForm from '../src/Components/auth/login';
import Link from 'next/link';
import Navbar from '../src/Components/nav';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount = () => {
        window.document.title = "Log in to Sponge";
    };
   
    render() {
        return(
            <div id="hpg">
                <Navbar/>
                <h1>Log in to Sponge</h1>
                <LoginForm/>
                <p>Don't have an account yet?<Link href="/register">
                   <a>Sign up</a>
                </Link></p>
            </div>
        )
    }
}

export default Login;