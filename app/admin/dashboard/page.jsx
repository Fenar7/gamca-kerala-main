"use client";
import './dashboard.css'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get('admin-auth');
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('admin-auth');
    router.push('/admin');
  };

  return (
    <>
      <section className="dashboard-container-main container">
        <div className="heading d-flex  align-items-center justify-content-between text-center margin-top margin-bottom">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btnn mt-3">Logout</button>
        </div>
        <div className="data-container-main container">
          <p>All entries (latest first)</p>
        </div>
      </section>
    </>
  );
}
