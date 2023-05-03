/* eslint-disable */
import React, { useState } from "react";
import "./index.css";



const RegisterForm: React.FC = () => {
  

  return (
    <form className="register-form" >
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          
          
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          
          
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
