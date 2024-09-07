import React from 'react';

function LoginForm() {
  return (
    <form className="login-form">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdbef5ea6bcefc91b849b99cc35af4b1584ba9851594ed1cfe1a8ad986e195b0?placeholderIfAbsent=true&apiKey=f5640191d60f45f28ab9a480644a186e" alt="" className="form-icon" />
      <h2 className="form-title">Login to Your Account</h2>
      <div className="form-group">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" id="username" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" className="form-input" required />
      </div>
      <a href="#" className="forgot-password">Forgot Password?</a>
      <button type="submit" className="login-button">Login</button>
      <style jsx>{`
        .login-form {
          display: flex;
          flex-direction: column;
          font-family: Poppins, sans-serif;
          color: #000;
          font-weight: 500;
        }
        .form-icon {
          aspect-ratio: 0.86;
          object-fit: contain;
          object-position: center;
          width: 55px;
          align-self: center;
        }
        .form-title {
          font-size: 24px;
          font-weight: 600;
          text-align: center;
          margin: 7px 0 74px;
        }
        .form-group {
          margin-bottom: 27px;
        }
        .form-label {
          display: block;
          font-size: 15px;
          margin-bottom: 6px;
        }
        .form-input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #000;
          background: transparent;
          padding: 5px 0;
          font-size: 15px;
        }
        .forgot-password {
          color: #a3a3a3;
          font-size: 11px;
          text-align: right;
          align-self: flex-end;
          text-decoration: none;
          margin-bottom: 40px;
        }
        .login-button {
          border-radius: 10px;
          background-color: #0b0c0e;
          font-size: 13px;
          color: #fff;
          text-align: center;
          padding: 10px 70px;
          border: none;
          cursor: pointer;
          align-self: center;
        }
        @media (max-width: 991px) {
          .form-title {
            margin-bottom: 40px;
          }
          .login-button {
            width: 100%;
            padding: 10px 20px;
          }
        }
      `}</style>
    </form>
  );
}

export default LoginForm;