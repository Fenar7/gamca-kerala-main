"use client";
import './dashboard.css';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const isAuthenticated = Cookies.get('admin-auth');
    if (!isAuthenticated) {
      router.push('/admin');
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/alldata', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUsers(data.reverse()); // Reverse the order of users
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = () => {
    Cookies.remove('admin-auth');
    router.push('/admin');
  };

  return (
    <>
      <section className="dashboard-container-main container">
        <div className="heading d-flex align-items-center justify-content-between text-center margin-top margin-bottom">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btnn mt-3">Logout</button>
        </div>
        <div className="data-container-main container">
          <p className="subhead">All entries (latest first)</p>
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="user-card d-flex">
                <p><strong>First Name:</strong> {user.firstname}</p>
                <p><strong>Last Name:</strong> {user.lastname}</p>
                <p><strong>Country:</strong> {user.country}</p>
                <p><strong>City:</strong> {user.city}</p>
                <p><strong>Country Travelling To:</strong> {user.countrytravellingto}</p>
                <p><strong>Date of Birth:</strong> {user.dateofbirth}</p>
                <p><strong>Nationality:</strong> {user.nationality}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Marital Status:</strong> {user.martialstatus}</p>
                <p><strong>Passport Number:</strong> {user.passportnumber}</p>
                <p><strong>Confirm Passport Number:</strong> {user.confirmpassportnumber}</p>
                <p><strong>Passport Issue Date:</strong> {user.passportissuedate}</p>
                <p><strong>Passport Issue Place:</strong> {user.passportissueplace}</p>
                <p><strong>Passport Expiry Date:</strong> {user.passportexpirydate}</p>
                <p><strong>Visa Type:</strong> {user.visatype}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>National ID:</strong> {user.nationalid}</p>
                <p><strong>Post Applied For:</strong> {user.postappliedfor}</p>
                <p><strong>Other:</strong> {user.other}</p>
                <p><strong>Payment Status:</strong> {user.paymentstatus ? 'Paid' : 'Not Paid'}</p>
              </div>
            ))
          ) : (
            <p>No users found</p>
          )}
        </div>
      </section>
    </>
  );
}
