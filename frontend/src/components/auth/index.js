import React from 'react';
import LoginComponent from './LoginComponent';

const AuthenticationComponent = () => {
  return (
    <div className="auth-card">
      <p className="auth-title">Login</p>
      <LoginComponent />
    </div>
  );
}

export default AuthenticationComponent;
