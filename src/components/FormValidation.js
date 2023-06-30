import React from "react";
import { useForm } from "react-hook-form";
import "./FormValidation.css"; // Import the CSS file

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="error-message">This field is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="error-message">Invalid email format</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="error-message">This field is required</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="error-message">
              Password must be at least 8 characters long
            </span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
