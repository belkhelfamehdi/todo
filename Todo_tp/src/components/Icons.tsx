import React from 'react';

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 4.5a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0112 4.5zm-7.25 7.25a.75.75 0 010-1.5h.5a.75.75 0 010 1.5h-.5zm14 0a.75.75 0 010-1.5h.5a.75.75 0 010 1.5h-.5zM12 19.5a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zM5.47 6.97a.75.75 0 011.06 0l.35.35a.75.75 0 11-1.06 1.06l-.35-.35a.75.75 0 010-1.06zm11.65 11.65a.75.75 0 011.06 0l.35.35a.75.75 0 11-1.06 1.06l-.35-.35a.75.75 0 010-1.06zM6.97 18.53a.75.75 0 000-1.06l-.35-.35a.75.75 0 10-1.06 1.06l.35.35a.75.75 0 001.06 0zm11.65-11.65a.75.75 0 000-1.06l-.35-.35a.75.75 0 10-1.06 1.06l.35.35a.75.75 0 001.06 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21.752 15.002A9.718 9.718 0 0112.75 22.5a9.75 9.75 0 010-19.5c.384 0 .759.022 1.125.066A0.75 0 0014 3.812 7.5 7.5 0 1020.188 10a0.75 0 001.564.125 9.718 9.718 0 01.0 4.877z" />
  </svg>
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6h18M8.25 6V4.5A2.25 2.25 0 0110.5 2.25h3A2.25 2.25 0 0115.75 4.5V6m-10.5 0h12v12.75A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75V6z"
    />
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM3.75 19.5a6 6 0 1112 0v.75a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75v-.75z"
    />
  </svg>
);

export const LoginIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9m6 6v3.75a2.25 2.25 0 01-2.25 2.25h-3A2.25 2.25 0 016 18.75V15m3-3h12m0 0l-3-3m3 3l-3 3"
    />
  </svg>
);

export const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75M5.25 10.5h13.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5z"
    />
  </svg>
);