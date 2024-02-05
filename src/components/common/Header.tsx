'use client';
import React from 'react';

export default function Header({ title, description }: any) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-primary'>
      <h1 className='text-3xl capitalize sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold'>
        {title}
      </h1>
      <p className='text-sm capitalize sm:text-md md:text-lg py-4 sm:py-5 text-center'>
        {description ? description : `Welcome to ${title}`}
      </p>
    </div>
  );
}
