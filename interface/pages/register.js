import React from 'react';
import Link from 'next/link';
import RegistrationForm from '../src/Components/auth/register';
import Navbar from '../src/Components/nav';

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
            <div id="hpg">
                <Navbar/>
                <h1>Sign up for Sponge</h1>
                <RegistrationForm/>
            </div>
        )
    }
}

export default Register;