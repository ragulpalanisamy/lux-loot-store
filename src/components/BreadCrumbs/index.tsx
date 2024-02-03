'use client';
import Link from 'next/link';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function BreadCrumbs({ title, subTitle }: any) {
  return (
    <div className='text-xs sm:text-sm md:text-base'>
      <Breadcrumb
        aria-label=''
        className='px-2 sm:px-5 py-2 sm:py-3 bg-gray-50 dark:bg-gray-800'
      >
        <Breadcrumb>
          <Link
            href='/'
            className='flex items-center hover:text-orange-400 text-black'
          >
            <HiHome className='text-primary dark:text-primary-400' />
            <span className='ml-2 dark:text-gray-200'>Home</span>
          </Link>
        </Breadcrumb>
        <Breadcrumb.Item href={`/category/${title}`}>
          <span className='truncate hover:text-orange-400 text-black'>
            {title}
          </span>
        </Breadcrumb.Item>
        {subTitle && (
          <Breadcrumb.Item>
            <span className='truncate dark:text-gray-400'>{subTitle}</span>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </div>
  );
}
