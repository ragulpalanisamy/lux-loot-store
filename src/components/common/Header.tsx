import React from 'react';

export default function Header({ title }: any) {
  return (
    <div className='max-w-7xl mx-auto py-10 text-primary'>
      <h1 className='text-6xl text-center font-bold'>{title}</h1>
      <p className='text-md text-center py-5'>Welcome to {title}</p>
    </div>
  );
}
