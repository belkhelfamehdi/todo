import React, { createContext, useContext, useState } from 'react';
import * as api from './api';

interface AuthContextProps {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string, role: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const login = async (username: string, password: string) => {
    const t = await api.login(username, password);
    localStorage.setItem('token', t);
    setToken(t);
  };

  const signup = async (username: string, password: string, role: string) => {
    await api.signup(username, password, role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
