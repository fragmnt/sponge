import React from 'react';
import { useForm } from "react-hook-form";
import '../../styles/forms.css';

const LoginForm = () => {

    const {register, errors } = useForm();
    const onSubmit = values => console.log(values);

    const handleSubmit = () => {
        // ...send to API
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="formBrk">
          <label>Email</label><br/>
        <input
        className="fInp"
          name="email"
          placeholder="example@domain.com"
          ref={register()}
        />
        {errors.email && errors.email.message}
        </div>

        <div className="formBrk">
        <label>Password</label><br/>
        <input
        className="fInp"
          name="password"
          placeholder="••••••••••"
          ref={register()}
        />
        {errors.email && errors.email.message}
        </div>

        <button className="bbtn" type="submit">Log in</button>
      </form>
    );
}

export default LoginForm;