import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* TailSpin loader component for loading animation */}
      <TailSpin
        height={100}
        width={100}
        color='black'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
