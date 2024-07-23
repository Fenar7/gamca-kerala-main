"use client"

import { useState } from 'react';
import RazorpayCheckout from '@/components/RazorPayCheckout/RazorPayCheckout';

export default function Home() {
  const [amount, setAmount] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCheckout(true);
  };

  

  return (
    <div>
      <h1>Welcome to Razorpay Payment Integration</h1>
      {!showCheckout ? (
        <form onSubmit={handleSubmit}>
          <label>
            Enter Amount:
            <input
              type="number"
              value={amount}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Proceed to Pay</button>
        </form>
      ) : (
        <RazorpayCheckout amount={amount} />
      )}
    </div>
  );
}
