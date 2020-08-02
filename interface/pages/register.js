import React from 'react';
import Link from 'next/link';
import RegistrationForm from '../src/Components/auth/register';

class Register extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount = () => {
        window.document.title = "Join Sponge today";
    };
   
    render() {
        return(
            <>
                <h1>Register to Sponge.id</h1>
                <Link href="/login">
                    <a>Log in</a>
                </Link>
                
                <RegistrationForm/>
            </>
        )
    }
}

export default Register;