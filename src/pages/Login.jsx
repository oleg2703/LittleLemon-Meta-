import Header from "../components/header";
import React, { useState } from "react";
import "../components/css/login.css"
import Footer from "../components/Footer";
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Header />
      <div className="authForm">
        <div className="container">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <form action="post">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="alex2703@gmail.com" required />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="********" required />
            </div>
            {!isLogin && (
              <div className="input-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" required />
              </div>
            )}
            <button className="btn-login" type="submit">{isLogin ? "Login" : "Register"}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register here" : "Login here"}
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AuthForm;
