import { Breadcrumb } from 'flowbite-react';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

export default function BreadCrumbs({ title, subTitle }: any) {
  return (
    <div className='text-xs sm:text-sm md:text-base'>
      <Breadcrumb
        aria-label=''
        className='px-2 sm:px-5 py-2 sm:py-3 dark:bg-gray-800'
      >
        <Breadcrumb>
          <Link href='/' className='flex items-center hover:text-orange-400'>
            <HiHome className='text-primary' />
            <span>Home</span>
          </Link>
        </Breadcrumb>
        <Breadcrumb.Item href={`/category/${title}`}>
          <span className='truncate hover:text-orange-400'>{title}</span>
        </Breadcrumb.Item>
        {subTitle && (
          <Breadcrumb.Item>
            <span className='truncate'>{subTitle}</span>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </div>
  );
}
