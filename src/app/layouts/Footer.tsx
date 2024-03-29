'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import Toast from '@/components/common/Toast/Toast';

import { SocialLinks } from './constant';

export default function Footer() {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <footer className='bg-gray-800 text-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 '>
        <div className='flex flex-wrap justify-between items-start'>
          <div className='w-full sm:w-auto mb-4 sm:mb-0'>
            <Link href='/' className='text-2xl font-bold'>
              LuxLoot
            </Link>
            <p className='mt-2'>The best products at your fingertips.</p>
          </div>
          <div className='flex flex-wrap gap-6'>
            <div className='w-full sm:w-auto'>
              {/* subscribe to our newsletter */}
              <h3 className='font-bold mb-2'>Subscribe</h3>
              <p className='text-gray-400'>
                Subscribe to our newsletter to stay up-to-date with the latest
                news and promotions.
              </p>
              <form
                action='https://formsubmit.co/ragulpalanisamy1001@gmail.com'
                className='md:flex items-center space-x-2 mt-4'
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing!');
                }}
              >
                <input
                  type='email'
                  placeholder='Enter your email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className='bg-gray-700 text-white mb-2 md:mb-0 px-4 py-2 rounded-lg'
                />
                <Link href='#' type='submit' onClick={() => handleSubscribe()}>
                  <p className='bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg'>
                    Subscribe
                  </p>
                </Link>
                {showToast && (
                  <Toast
                    showToast={showToast}
                    toastContent='Thank you for subscribing!'
                  />
                )}
              </form>
            </div>
            <div>
              <h3 className='font-bold mb-2'>Follow Us</h3>
              <ul className='flex gap-4'>
                {SocialLinks?.map((link) => (
                  <li
                    key={link.id}
                    className='text-2xl text-black hover:bg-orange-500 hover:text-white bg-white p-2 rounded-full'
                  >
                    <Link
                      href={link?.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <p>{React.createElement(link?.Icon)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center border-t border-gray-700 pt-4'>
          © {new Date().getFullYear()} LuxLoot, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
