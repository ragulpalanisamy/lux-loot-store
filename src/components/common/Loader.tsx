"use client";
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  const [size, setSize] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      // Set size based on window width, for example
      setSize(window.innerWidth < 768 ? 50 : 100);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <div className='flex justify-center items-center h-screen'>
      <TailSpin
        height={size}
        width={size}
        color='orange'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
