'use client';
import { useState } from 'react';

const EmailSignupInline = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-2 border rounded w-64 sm:w-auto focus:outline-none focus:border-[#800020]"
      />
      <button
        type="submit"
        className="bg-[#800020] text-white px-6 py-2 rounded hover:bg-black transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};

export default EmailSignupInline;
