import React from 'react';

export default function Header({ title, description }: any) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-primary'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold'>
        {title && title[0].toUpperCase() + title.slice(1)}
      </h1>
      <p className='text-sm sm:text-md md:text-lg py-4 sm:py-5 text-center'>
        {description
          ? description
          : `Welcome to ${title[0].toUpperCase() + title.slice(1)}`}
      </p>
    </div>
  );
}
