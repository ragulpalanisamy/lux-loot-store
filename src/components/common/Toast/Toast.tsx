'use client';
import { Toast } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';

export default function ToastComponent({
  showToast,
  toastContent,
}: {
  showToast: boolean;
  toastContent: any;
}) {
  return (
    <div
      className={`${
        showToast
          ? 'fixed top-2 left-1/2 transform -translate-x-1/2 z-50'
          : 'hidden'
      } w-auto max-w-full px-4`}
    >
      {showToast && (
        <Toast>
          <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'>
            <HiCheck className='h-5 w-5' />
          </div>
          <div className='ml-3 text-sm font-normal text-black dark:text-white'>
            {toastContent}
          </div>
        </Toast>
      )}
    </div>
  );
}
