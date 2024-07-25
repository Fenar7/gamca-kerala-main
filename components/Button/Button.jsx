"use client";

import './button.css';
import { useRouter } from 'next/navigation';

function Button({ text }) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/register');
  };

  return (
    <button className="btnn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
