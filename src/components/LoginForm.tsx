import React, { useState } from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for login, e.g., sending a request to the server
    console.log('Logging in user:', username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <p>Test123</p>
    </form>
  );
};

export default LoginForm;