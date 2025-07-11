'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Check if email already exists
      const { data: existing } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single();

      if (existing) {
        setStatus('error');
        setMessage('This email is already on the waitlist!');
        return;
      }

      // Insert new entry
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, subscribed: true }]);

      if (error) throw error;

      setStatus('success');
      setMessage('You\'re on the waitlist! 🎉');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1E1E1E] border border-green-600/30 rounded-lg p-4 text-center"
      >
        <p className="text-[#00E5C4] font-medium">Thanks for joining our waitlist!</p>
        <p className="text-sm text-gray-400 mt-1">We'll notify you when we launch.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-[#1A1A1A] text-white rounded-lg px-4 py-3 border border-[#2A2A2A] focus:outline-none focus:border-[#7E5FFF] transition-colors"
        />
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gradient-to-r from-[#7E5FFF] to-[#00E5C4] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'loading' ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Join Waitlist'
          )}
        </motion.button>
      </div>

      {message && (
        <p className="mt-2 text-sm text-red-500">
          {message}
        </p>
      )}
    </form>
  );
}