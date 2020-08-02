import React from 'react';
import { useForm } from "react-hook-form";

const RegistrationForm = () => {

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
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}

        <label>Password</label>
        <input
          placeholder="••••••••••"
          name="password"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid password, try something more secure"
            }
          })}
        />
        {errors.email && errors.email.message}
  
        <label>Username</label>
        <input
          name="username"
          placeholder="Your username"
          ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Username must be unique and between 4-32 characters long"
              },
              validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}
  
        <button type="submit">Create my store</button>
      </form>
    )
}

export default RegistrationForm;