// components/SignUpForm.tsx
import React, { useState } from 'react';
import Button from '../components/Button';
import { UserIcon, LockIcon } from '../components/Icons';
import { useAuth } from '../AuthContext';

const SignUpForm: React.FC = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('USER');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      await signup(username, password, role);
      alert('Compte créé');
    } catch {
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Créer un compte</h1>
      <form onSubmit={handleSubmit} className="w-lg max-w-md bg-white p-8 rounded shadow-md space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rôle</label>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block px-3 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="USER">Utilisateur</option>
            <option value="ADMIN">Administrateur</option>
          </select>
        </div>

        <Button type="submit">
          S'inscrire
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
