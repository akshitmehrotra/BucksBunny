import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [namee, setNamee] = useState('');
  const [age, setAge] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameeChange = (event) => {
    setNamee(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., sign-up logic) here
  };

  return (
    <div className='back'>
      <div className='heading'>BucksBunny</div>
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
        <div className='email'>
          <input
            placeholder='Enter your name...'
            type="text"
            value={namee}
            onChange={handleNameeChange}
            required
          />
        </div>
        <div className='pass'>
          <input
            placeholder='Enter your age...'
            type="numeric"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>
        <button className="butt" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
