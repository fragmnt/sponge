import React from 'react';
import RegistrationForm from '../src/Components/auth/register';

class Register extends React.Component {
   
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
                <h1>Register to Sponge.id</h1>
                <RegistrationForm/>
            </>
        )
    }
}

export default Register;