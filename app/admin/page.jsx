"use client";
import './admin.css'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get('admin-auth');
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      Cookies.set('admin-auth', 'true', { expires: 1 });
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container admin-login-container d-flex flex-column align-items-center justify-content-center margin-bottom margin-top">
      <h1>Welcome Back Admin</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center">
        <div className="row-main mg-top">
          <div className="form-group custom-select-wrapper">
            <label htmlFor="username">Username</label>
            <div className="custom-select-container">
              <input type="text" className="form-control custom-select" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="row-main mg-bottom">
        <div className="form-group custom-select-wrapper">
            <label htmlFor="password">Password</label>
            <div className="custom-select-container">
              <input type="password" className="form-control custom-select" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        </div>
        <button type="submit userlogin-button">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
