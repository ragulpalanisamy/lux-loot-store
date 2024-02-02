import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function BreadCrumbs({ title, subTitle }: any) {
  return (
    <div className='text-xs sm:text-sm md:text-base'>
      <Breadcrumb
        aria-label='Solid background breadcrumb'
        className='px-2 sm:px-5 py-2 sm:py-3 dark:bg-gray-800'
      >
        <Breadcrumb.Item href='/' icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/category/${title}`}>
          <span className='truncate'>{title}</span>
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
