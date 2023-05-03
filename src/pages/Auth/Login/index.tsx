/* eslint-disable */
import React, { useState } from "react";
import "./index.css";



const LoginForm: React.FC = () => {
  

  return (
    <form className="login-form" >
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
