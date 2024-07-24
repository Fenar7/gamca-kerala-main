"use client";
import './payment.css'

import { useEffect, useState } from "react";

function Page() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    passportno: '',
    amount: '',
    id:'',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/userdetails', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, []);

  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  let amount = userData.amount

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency: 'INR' }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      console.log('Order data:', data);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'GAMCA Kerala',
        description: 'payment',
        image: '/your_logo.png',
        order_id: data.id,
        handler: async function (response) {
          // alert(`Payment ID: ${response.razorpay_payment_id}`);
          // alert(`Order ID: ${response.razorpay_order_id}`);
          // alert(`Signature: ${response.razorpay_signature}`);
          setPaymentSuccess(true);
          console.log('payment success for '+userData.id.replace(/^"|"$/g, ''))
          let paymentresponse = await fetch('/api/set-status', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({userData,response}),
          });

          let clearcookie = await fetch('/api/clear-cookie',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          });
        },
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: '9999999999',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#F37254',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="payment-container-main container d-flex align-items-center justify-content-center flex-column">
          <div className="payment-container d-flex flex-column align-items-center justify-content-center">
          <h1>Payment Confirmation</h1>
          <h5>Name: {userData.name}</h5>
          <h5>Email: {userData.email}</h5>
          <h5>Passport no: {userData.passportno}</h5>
          <h5>Amount: {userData.amount}</h5>
          <div>
          {!paymentSuccess ? (
            <button onClick={handlePayment} disabled={loading}>
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          ) : (
            <h3>Payment Success</h3>
          )}
        </div>
          </div>
      </div>
    </>
  );
}

export default Page;
