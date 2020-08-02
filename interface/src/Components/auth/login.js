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
        <input
          name="email"
          ref={register()}
        />
        {errors.email && errors.email.message}

        <input
          name="password"
          ref={register()}
        />
        {errors.email && errors.email.message}

        <button type="submit">Submit</button>
      </form>
    )
}

export default LoginForm;