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
        <input
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}

        <input
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
  
        <input
          name="username"
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
  
        <button type="submit">Submit</button>
      </form>
    )
}

export default RegistrationForm;