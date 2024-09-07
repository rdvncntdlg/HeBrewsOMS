import React from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';

function LoginPage() {
  return (
    <div className="login-page">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d65d0260250ff3a3617d23644e59963c0d1780d4632f2a7a4b5a008b07c3e7?placeholderIfAbsent=true&apiKey=f5640191d60f45f28ab9a480644a186e" alt="" className="background-image" />
      <main className="login-container">
        <div className="login-content">
          <section className="logo-section">
            <Logo />
          </section>
          <section className="form-section">
            <LoginForm />
          </section>
        </div>
      </main>
      <style jsx>{`
        .login-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 100vh;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .login-container {
          position: relative;
          background-color: rgba(12, 12, 12, 0.7);
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 178px 70px;
          min-height: 100vh;
        }
        .login-content {
          border-radius: 20px;
          background-color: #f6f6f6;
          box-shadow: 6px 12px 14px rgba(0, 0, 0, 0.25);
          width: 1008px;
          max-width: 100%;
          display: flex;
        }
        .logo-section {
          flex: 0 0 58%;
        }
        .form-section {
          flex: 0 0 42%;
          padding: 40px;
        }
        @media (max-width: 991px) {
          .login-container {
            padding: 100px 20px;
          }
          .login-content {
            flex-direction: column;
          }
          .logo-section,
          .form-section {
            flex: 1 1 auto;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default LoginPage;