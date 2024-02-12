import React, { useState } from 'react';
import Input from './Input'; // Assuming the Input component is in the same directory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
