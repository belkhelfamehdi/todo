import React, { useState } from 'react';
import Button from '../components/Button';
import { UserIcon, LockIcon } from '../components/Icons';
import { useAuth } from '../AuthContext';

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="w-lg bg-white p-8 rounded shadow-md space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <Button type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;