import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <TailSpin
        height={80}
        width={80}
        color='orange'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
