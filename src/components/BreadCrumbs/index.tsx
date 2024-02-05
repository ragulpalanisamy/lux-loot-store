'use client';
import Link from 'next/link';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function BreadCrumbs({ title, subTitle }: any) {
  return (
    <nav className='text-xs flex max-w-7xl flex-wrap sm:text-sm md:text-base px-2 sm:px-5 py-2 sm:py-3'>
      <Breadcrumb aria-label='Breadcrumb'>
        <Breadcrumb.Item>
          <Link href='/' legacyBehavior>
            <a className='flex items-center hover:text-orange-400 text-black'>
              <HiHome className='text-primary dark:text-primary-400' />
              <span className='ml-2 dark:text-gray-200 text-md font-bold text-black hover:text-orange-400'>
                Home
              </span>
            </a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/category/${title}`}>
          <a className='truncate capitalize hover:text-orange-400 text-black'>
            {title}
          </a>
        </Breadcrumb.Item>
        {subTitle && (
          <Breadcrumb.Item>
            <span className='truncate w-10 dark:text-gray-400'>{subTitle}</span>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </nav>
  );
}
