import React, { useState } from 'react';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., login logic) here
  };

  return (
    <div className='back'>
      <div className='heading'>BucksBunny</div>
      <div className='cred'>
      <div className='signup'>Signup</div>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='email'>
          <input
            placeholder='Enter your email...'
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='pass'>
          <input
            placeholder='Enter your password...'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="butt" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
