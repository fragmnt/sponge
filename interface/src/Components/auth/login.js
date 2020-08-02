import React from 'react';
import { useForm } from "react-hook-form";

const LoginForm = () => {

    const {register, errors } = useForm();
    const onSubmit = values => console.log(values);

    const handleSubmit = () => {
        // ...send to API
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
        <input
          name="email"
          placeholder="example@domain.com"
          ref={register()}
        />
        {errors.email && errors.email.message}

        <label>Password</label>
        <input
          name="password"
          placeholder="••••••••••"
          ref={register()}
        />
        {errors.email && errors.email.message}

        <button type="submit">Log in</button>
      </form>
    )
}

export default LoginForm;