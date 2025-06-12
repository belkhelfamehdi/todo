import React from "react";
import Button from "../components/Button";
import { UserIcon, LockIcon } from "../components/Icons";

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form className="w-lg bg-white p-8 rounded shadow-md space-y-4">
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