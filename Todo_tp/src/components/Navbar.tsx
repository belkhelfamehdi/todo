import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import LoginForm from '../ui/LoginForm';
import SignUpForm from '../ui/SignUpForm';
import { LoginIcon, UserIcon } from './Icons';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {

    const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
    const [isModalSignupOpen, setIsModalSignupOpen] = useState<boolean>(false);

  return (
    <>
        <div className="w-full sticky top-0 z-50 bg-white">
         <nav className="container mx-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow"></nav>
            <div className="flex justify-between items-center w-full px-20">
            <div className="text-2xl font-bold flex items-center space-x-2">
                <span>{title}</span>
            </div>
            <div className="flex items-center space-x-4 py-4 justify-center">
                <Button onClick={() => setIsModalLoginOpen(true)} className="flex items-center space-x-2">
                    <LoginIcon className="w-4 h-4" />
                    <span>Login</span>
                </Button>
                <Button onClick={() => setIsModalSignupOpen(true)} className="flex items-center space-x-2">
                    <UserIcon className="w-4 h-4" />
                    <span>Sign Up</span>
                </Button>
            </div>
            </div>
        </div>
        <Modal isOpen={isModalLoginOpen} onClose={() => setIsModalLoginOpen(false)} title="Login" hideHeader>
            <LoginForm />
        </Modal>
        <Modal isOpen={isModalSignupOpen} onClose={() => setIsModalSignupOpen(false)} title="Sign Up" hideHeader>
            <SignUpForm />
        </Modal>
    </>
  );
};

export default Navbar;
